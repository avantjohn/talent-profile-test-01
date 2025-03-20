# Designer Profile: Olivia Gray

A modern design system profile for Olivia Gray, featuring a sophisticated aesthetic with subtle contrasts, cool tones, and thoughtful spacing.

## 🎨 Designer Aesthetic

Olivia Gray's aesthetic is modern and refined with subtle contrasts, cooler tones, and slightly faster animations for a contemporary digital experience. Her design language emphasizes clarity and sophistication through a carefully balanced color system centered on blue-purples and teals, complemented by precise typography and thoughtful spacing.

## 📁 Project Structure

```
├── design-system/             # Core design system CSS files
│   ├── borders-theme.css      # Border styling definitions
│   ├── colors-core.css        # Core color system
│   ├── colors-theme.css       # Color theme definitions
│   ├── elevation-theme.css    # Shadow/elevation system
│   ├── fonts-theme.css        # Typography definitions
│   ├── index.css              # Main design system entry point
│   ├── media-theme.css        # Media handling styles
│   ├── motion-theme.css       # Animation and transitions
│   └── spacing-theme.css      # Spacing system
├── design-system.json         # Schema definition structure
├── generated-styles.css       # Processed CSS from Olivia's profile
├── olivia-gray.json           # Olivia's design profile definition
└── process-profile.js         # Generator script for CSS variables
```

## 🧰 Design System Architecture

The project uses a two-part architecture:

1. **Core Schema (`design-system.json`)**: Defines the structure and schema for design systems
2. **Designer Profile (`olivia-gray.json`)**: Contains Olivia's specific design tokens and preferences

This separation allows for:
- Clear definition of design system structure
- Multiple designer profiles using the same schema
- Validation of profiles against the schema
- Easy extension with new components

## 💎 Design System Components

### Color System

- **Base Color**: Muted purple (`oklch(45% 0.09 270)`)
- **Key Colors**: 
  - **Primary**: Blue-purple (core-07)
  - **Secondary**: Teal/cyan (core-05)
- **Color Scales**:
  - **Tint-scale**: 1.32 (creates dramatic light variations)
  - **Shade-scale**: 1.28 (provides rich shadow tones)
  - **Chroma-shift**: 1.2 (slightly higher saturation)


### Typography

- **Font Stack**: Roboto Flex for headings and body text, JetBrains Mono for code
- **Type Scale**: 1.33 ratio
- **Weights**: Extra bold (780) for headings, regular (400) for body
- **Line Heights**: Tighter than standard (1.15-1.75 range)
- **Letter Spacing**: Slightly tighter for headings (-0.035em)

### Spacing

- **Scale**: Fibonacci-inspired multipliers (1, 2, 3, 5, 8, 13, 21, 34, 55, 89)
- **Base Unit**: 0.25rem
- **Container Width**: 90rem maximum
- **Grid System**: 12-column with 6-unit gutters

### Borders & Radius

- **Base Radius**: 0.45rem
- **Component-specific**: Larger for cards, medium for buttons, smaller for inputs
- **Border Weights**: Thin (1px), Regular (2px), Thick (3px)

### Elevation

- **Shadow Color**: Slightly warm dark blue (220deg 30% 10%)
- **Shadow Strength**: 0.15 (moderate shadows)
- **Ambient Strength**: 0.09 (subtle global illumination)

### Motion

- **Duration Range**: 45ms-450ms (slightly faster than standard)
- **Easing**: Smooth productive motion and expressive spring animations

## 🖌️ Component Styles

### Buttons

```css
/* Primary Button */
.btn-primary {
  background-color: var(--og-component-primary);
  color: var(--og-text-primary);
  padding: var(--og-spacing-button-y) var(--og-spacing-button-x);
  border: none;
  border-radius: var(--og-radius-button);
  box-shadow: var(--og-shadow-xs);
  transition: all var(--og-duration-normal) var(--og-easing-productive);
}
```

### Cards

```css
/* Card Component */
.card {
  background-color: var(--og-bg-secondary);
  border: var(--og-border-thin) solid var(--og-bg-tertiary);
  border-radius: var(--og-radius-card);
  padding: var(--og-spacing-card);
  box-shadow: var(--og-shadow-md);
}
```

### Inputs

```css
/* Text Input */
input[type="text"] {
  background-color: var(--og-bg-tertiary);
  color: var(--og-text-primary);
  border: var(--og-border-thin) solid var(--og-component-secondary);
  border-radius: var(--og-radius-input);
  padding: var(--og-spacing-input-y) var(--og-spacing-input-x);
}
```

## 🚀 Usage Guide

### Process and Implementation

The design system is processed through these steps:

1. The `olivia-gray.json` profile contains design tokens and preferences
2. The `process-profile.js` script generates CSS variables from the profile
3. `generated-styles.css` provides CSS variables for the entire design system
4. `index.html` demonstrates the components with `styles.css` handling layout

### Important Implementation Notes

#### OKLCH Color Handling

When working with the color system:

- Always use positive hue angles (0-360°) in the profile JSON when defining harmony shifts
- Negative angles (like `-20`) have been converted to their positive equivalents (like `340`)
- This prevents color inversion issues that can occur when browsers normalize CSS color angles
- The implementation in `process-profile.js` expects positive angles to ensure consistent color rendering

### CSS Variables Implementation

```css
/* Import the generated styles in your project */
@import 'generated-styles.css';

/* Use the variables directly */
.my-component {
  background-color: var(--og-bg-primary);
  color: var(--og-text-primary);
  padding: var(--og-spacing-5);
  border-radius: var(--og-radius-md);
}
```

### Tailwind Implementation

Create a `tailwind.config.js` file:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'og-brand-primary': 'var(--og-brand-primary)',
        'og-brand-secondary': 'var(--og-brand-secondary)',
        'og-bg-primary': 'var(--og-bg-primary)',
        // other color values
      },
      fontFamily: {
        'og-heading': ['Roboto Flex', 'sans-serif'],
        'og-body': ['Roboto Flex', 'sans-serif'],
        'og-mono': ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        // Fibonacci-inspired spacing scale
      },
      borderRadius: {
        'og-button': 'var(--og-radius-button)',
        'og-card': 'var(--og-radius-card)',
        'og-input': 'var(--og-radius-input)',
      },
    }
  }
}
```

## 🧪 Demo

The `index.html` file provides a demo showcase of Olivia Gray's design system, including:

- Color palette visualization
- Typography examples
- Component demonstrations (buttons, cards, inputs)

## 🔄 Light/Dark Mode Support

The design system includes built-in support for light and dark modes:

```css
/* Light mode variables included in generated-styles.css */
.light-mode {
  --og-bg-primary: var(--og-color-core-00-100);
  --og-bg-secondary: var(--og-color-core-00-200);
  /* other light mode variables */
}
```


## 📦 Getting Started

1. Clone this repository
2. Open `index.html` to view the design system demo
3. Use `generated-styles.css` in your own projects
4. Customize `olivia-gray.json` to create variations
5. Run `node process-profile.js` to regenerate CSS variables

---

## 📄 License

MIT 