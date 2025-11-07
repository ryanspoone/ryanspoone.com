import '@/styles/ui/Button.css';
import { ReactNode, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';

interface BaseButtonProps {
  /**
   * The button content (text, icons, etc.)
   */
  children: ReactNode;

  /**
   * Visual style variant
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Button size
   * @default 'medium'
   */
  size?: ButtonSize;

  /**
   * Optional custom class name
   */
  className?: string;

  /**
   * Full width button
   * @default false
   */
  fullWidth?: boolean;
}

interface ButtonAsButtonProps extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /**
   * Render as a link (Next.js Link component)
   */
  href?: never;
}

interface ButtonAsLinkProps extends BaseButtonProps {
  /**
   * When href is provided, renders as Next.js Link
   */
  href: string;

  /**
   * Open link in new tab
   * @default false
   */
  external?: boolean;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

/**
 * Button - A reusable button component that can render as a button or link.
 *
 * Features:
 * - Multiple variants: primary, secondary, outline
 * - Multiple sizes: small, medium, large
 * - Can render as button or Next.js Link
 * - Supports all native button attributes
 * - Accessible with proper ARIA attributes
 *
 * @example
 * ```tsx
 * // As a button
 * <Button onClick={handleClick} variant="primary">
 *   Click Me
 * </Button>
 *
 * // As a link
 * <Button href="/archive" variant="primary">
 *   Archive
 * </Button>
 *
 * // As an external link
 * <Button href="https://example.com" external variant="outline">
 *   Visit Site
 * </Button>
 * ```
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  fullWidth = false,
  ...props
}: ButtonProps) {
  const baseClasses = 'btn';
  const variantClass = `btn--${variant}`;
  const sizeClass = `btn--${size}`;
  const widthClass = fullWidth ? 'btn--full-width' : '';
  const combinedClassName = `${baseClasses} ${variantClass} ${sizeClass} ${widthClass} ${className}`.trim();

  if ('href' in props && props.href) {
    const { href, external = false } = props;

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
