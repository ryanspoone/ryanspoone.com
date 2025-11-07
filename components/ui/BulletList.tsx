import '@/styles/ui/BulletList.css';
import { ReactNode } from 'react';

export interface BulletListProps {
  /**
   * Array of items to display. Can be strings or React nodes for complex content.
   */
  items: (string | ReactNode)[];

  /**
   * Number of columns for the grid layout.
   * @default 1
   */
  columns?: 1 | 2;

  /**
   * Optional custom class name for additional styling.
   */
  className?: string;

  /**
   * ARIA label for the list.
   */
  ariaLabel?: string;
}

/**
 * BulletList - A reusable component for displaying lists with bullet points.
 *
 * Features:
 * - Consistent bullet styling with teal arrows (▹)
 * - Supports single or two-column layouts
 * - Responsive: always single column on mobile
 * - Accessible with proper ARIA attributes
 *
 * @example
 * ```tsx
 * <BulletList
 *   items={['Python', 'JavaScript', 'React']}
 *   columns={2}
 *   ariaLabel="Technologies list"
 * />
 * ```
 */
export default function BulletList({
  items,
  columns = 1,
  className = '',
  ariaLabel
}: BulletListProps) {
  const columnClass = columns === 2 ? 'bullet-list--two-columns' : '';
  const combinedClassName = `bullet-list ${columnClass} ${className}`.trim();

  return (
    <ul
      className={combinedClassName}
      aria-label={ariaLabel}
    >
      {items.map((item, index) => (
        <li key={index} className="bullet-list__item">
          {item}
        </li>
      ))}
    </ul>
  );
}
