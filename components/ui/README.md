# UI Components

This directory contains reusable UI components that provide consistent styling and behavior across the application.

## Philosophy

The UI component library follows these principles:

1. **Consistency First**: All components enforce consistent styling and behavior by design
2. **Type Safety**: Full TypeScript support with proper types and interfaces
3. **Accessibility**: ARIA attributes and keyboard navigation where applicable
4. **Flexibility**: Props for common variations without over-engineering
5. **Documentation**: Every component includes JSDoc comments and usage examples

## Component Structure

Each UI component follows this standard structure:

```
ComponentName/
├── ComponentName.tsx          # Component logic and markup
├── ComponentName.css          # Component styles (scoped with BEM)
```

### File Organization

```
components/
├── ui/                        # Reusable UI components
│   ├── BulletList.tsx
│   ├── Button.tsx
│   └── index.ts              # Barrel exports
├── common/                    # Utility/wrapper components
│   ├── ExternalLink.tsx
│   ├── ErrorMessage.tsx
│   └── AsyncDataWrapper.tsx
└── [Feature]/                 # Feature-specific components
    └── FeatureComponent.tsx
```

## Naming Conventions

### Components
- **PascalCase** for component names: `BulletList`, `Button`
- **Descriptive and specific**: Name reflects what it is, not what it does

### CSS Classes
We use a **BEM-inspired** naming convention:

- **Block**: `.component-name` (e.g., `.bullet-list`, `.btn`)
- **Element**: `.component-name__element` (e.g., `.bullet-list__item`)
- **Modifier**: `.component-name--modifier` (e.g., `.btn--primary`, `.btn--large`)

### Props
- **camelCase** for prop names: `ariaLabel`, `fullWidth`, `onClick`
- **Descriptive and clear**: `columns` not `cols`, `variant` not `type`
- **Default values**: Provide sensible defaults for optional props

## Creating New Components

### 1. Identify the Pattern

Before creating a new component, ask:
- Is this pattern repeated 3+ times?
- Does it have consistent styling requirements?
- Would centralization prevent future inconsistencies?

If yes to all three, create a component.

### 2. Define the Interface

```tsx
export interface ComponentNameProps {
  /**
   * Clear description of what this prop does
   */
  propName: PropType;

  /**
   * Optional prop with default
   * @default 'defaultValue'
   */
  optionalProp?: PropType;
}
```

### 3. Add JSDoc Documentation

Every component should have:
- Description of what it does
- List of key features
- Usage examples
- Props documentation

```tsx
/**
 * ComponentName - Brief description
 *
 * Features:
 * - Feature 1
 * - Feature 2
 * - Feature 3
 *
 * @example
 * ```tsx
 * <ComponentName prop="value">
 *   Content
 * </ComponentName>
 * ```
 */
```

### 4. Follow the Component Template

```tsx
import '@/styles/ui/ComponentName.css';
import { ReactNode } from 'react';

export interface ComponentNameProps {
  children: ReactNode;
  variant?: 'default' | 'alternative';
  className?: string;
}

/**
 * ComponentName - Description
 */
export default function ComponentName({
  children,
  variant = 'default',
  className = ''
}: ComponentNameProps) {
  const variantClass = `component-name--${variant}`;
  const combinedClassName = `component-name ${variantClass} ${className}`.trim();

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
}
```

### 5. Create the Styles

```css
/**
 * ComponentName Component Styles
 *
 * Description of styling approach
 */

/* Base styles */
.component-name {
  /* Base styles here */
}

/* Elements */
.component-name__element {
  /* Element styles */
}

/* Modifiers */
.component-name--modifier {
  /* Modifier styles */
}

/* Responsive */
@media (max-width: 48em) {
  .component-name {
    /* Mobile styles */
  }
}
```

## Available Components

### BulletList

A reusable list component with consistent bullet styling.

**Props:**
- `items`: Array of strings or React nodes
- `columns`: 1 or 2 column layout (responsive)
- `className`: Optional additional classes
- `ariaLabel`: Accessibility label

**Usage:**
```tsx
import { BulletList } from '@/components/ui';

<BulletList
  items={['Item 1', 'Item 2', 'Item 3']}
  columns={2}
  ariaLabel="List description"
/>
```

### Button

A versatile button component that can render as a button or link.

**Props:**
- `children`: Button content
- `variant`: 'primary' | 'secondary' | 'outline'
- `size`: 'small' | 'medium' | 'large'
- `href`: Optional URL (renders as link)
- `external`: Open link in new tab
- `fullWidth`: Full width button
- All native button attributes

**Usage:**
```tsx
import { Button } from '@/components/ui';

// As button
<Button onClick={handleClick} variant="primary">
  Click Me
</Button>

// As link
<Button href="/archive" variant="primary" size="large">
  Archive
</Button>

// As external link
<Button href="https://example.com" external variant="outline">
  Visit Site
</Button>
```

## Migration Guide

### Converting Existing Code

When converting existing components to use UI components:

1. **Identify the pattern** - Find repeated markup and styles
2. **Replace with component** - Use the appropriate UI component
3. **Remove old styles** - Delete now-unused CSS classes
4. **Test thoroughly** - Verify visual and functional parity

### Example Migration

**Before:**
```tsx
<ul className="skills">
  <li className="skill">Python</li>
  <li className="skill">JavaScript</li>
</ul>
```

**After:**
```tsx
import { BulletList } from '@/components/ui';

<BulletList
  items={['Python', 'JavaScript']}
  columns={2}
/>
```

## Best Practices

### DO ✅

- Use UI components for all repeated patterns
- Provide `ariaLabel` for accessibility
- Use TypeScript types for props
- Document complex components with examples
- Keep components focused and single-purpose
- Use semantic HTML elements
- Include hover and focus states

### DON'T ❌

- Create components for one-off uses
- Mix presentation and business logic
- Over-engineer with too many variants
- Skip accessibility attributes
- Duplicate styles across components
- Use inline styles (use CSS classes)

## Testing

When creating new components, consider:

1. **Visual Testing**: Does it look correct in all states?
2. **Responsive Testing**: Does it work on mobile and desktop?
3. **Accessibility Testing**: Can it be used with keyboard and screen readers?
4. **Type Safety**: Do the TypeScript types prevent misuse?

## Future Enhancements

Potential components to add:

- **Card**: Reusable card component for projects, case studies
- **LoadingSpinner**: Consistent loading states
- **Badge/Tag**: For tech stacks and labels
- **Icon**: Wrapper for consistent icon sizing
- **Heading**: Enforce heading hierarchy

## Questions?

When in doubt:
1. Look at existing components for patterns
2. Check if a similar component already exists
3. Consider if the pattern is truly reusable
4. Document your decisions in code comments

---

**Remember**: The goal is consistency without over-engineering. Create components when they prevent future inconsistencies, not just for the sake of abstraction.
