// Olivia Gray Profile Processor
// This script processes the profile JSON and generates the correct CSS variables

const fs = require('fs');

// Load Olivia's profile
const oliviaProfile = JSON.parse(fs.readFileSync('./olivia-gray.json', 'utf8'));

// Extract prefix from profile
const prefix = oliviaProfile["design-system"].meta["preferred-prefix"];

// Base color and harmony shifts from the profile
const baseColor = oliviaProfile["design-system"].colors.core.base;
const harmonyShifts = oliviaProfile["design-system"].colors.core.harmony;
const colorFactors = oliviaProfile["design-system"].colors.factors;

// Parse the base color to get the components (assumes format like "oklch(45% 0.09 -90)")
const baseHueMatch = baseColor.match(/([0-9.-]+)\)$/);
const baseHue = parseInt(baseHueMatch[1]);
const baseLightness = parseFloat(baseColor.match(/\(([0-9.]+)%/)[1]) / 100;
const baseChroma = parseFloat(baseColor.match(/% ([0-9.]+) /)[1]);

// Use the exact base color string without modifications - important for correct angle handling
console.log(`Using base color: ${baseColor}`);

// Create CSS content
let cssContent = `/* Olivia Gray Design System - CSS Implementation (Generated) */
:root {
  /* Colors - Core base */
  --${prefix}-color-core: ${baseColor};
  
  /* Typography */
  --${prefix}-font-heading: 'Roboto Flex', sans-serif;
  --${prefix}-font-body: 'Roboto Flex', sans-serif;
  --${prefix}-font-mono: 'JetBrains Mono', monospace;
  --${prefix}-font-size-base: 16px;
  --${prefix}-type-scale: 1.33;
  
  --${prefix}-font-size-sm: calc(var(--${prefix}-font-size-base) / var(--${prefix}-type-scale));
  --${prefix}-font-size-md: var(--${prefix}-font-size-base);
  --${prefix}-font-size-lg: calc(var(--${prefix}-font-size-base) * var(--${prefix}-type-scale));
  --${prefix}-font-size-xl: calc(var(--${prefix}-font-size-base) * var(--${prefix}-type-scale) * var(--${prefix}-type-scale));
  --${prefix}-font-size-xxl: calc(var(--${prefix}-font-size-base) * var(--${prefix}-type-scale) * var(--${prefix}-type-scale) * var(--${prefix}-type-scale));
  --${prefix}-font-size-xxxl: calc(var(--${prefix}-font-size-base) * var(--${prefix}-type-scale) * var(--${prefix}-type-scale) * var(--${prefix}-type-scale) * var(--${prefix}-type-scale));
  
  --${prefix}-font-weight-body: 400;
  --${prefix}-font-weight-emphasis: 600;
  --${prefix}-font-weight-heading: 780;
  
  --${prefix}-line-height-tight: 1.15;
  --${prefix}-line-height-normal: 1.45;
  --${prefix}-line-height-loose: 1.75;
  --${prefix}-line-height-display: 1.05;
  
  --${prefix}-letter-spacing-tight: -0.035em;
  --${prefix}-letter-spacing-normal: -0.001em;
  --${prefix}-letter-spacing-wide: 0.03em;
  
  /* Spacing */
  --${prefix}-spacing-unit: 0.25rem;
  --${prefix}-spacing-1: calc(var(--${prefix}-spacing-unit) * 1);
  --${prefix}-spacing-2: calc(var(--${prefix}-spacing-unit) * 2);
  --${prefix}-spacing-3: calc(var(--${prefix}-spacing-unit) * 3);
  --${prefix}-spacing-5: calc(var(--${prefix}-spacing-unit) * 5);
  --${prefix}-spacing-8: calc(var(--${prefix}-spacing-unit) * 8);
  --${prefix}-spacing-13: calc(var(--${prefix}-spacing-unit) * 13);
  --${prefix}-spacing-21: calc(var(--${prefix}-spacing-unit) * 21);
  --${prefix}-spacing-34: calc(var(--${prefix}-spacing-unit) * 34);
  
  /* Semantic spacing */
  --${prefix}-spacing-button-x: calc(var(--${prefix}-spacing-unit) * 5);
  --${prefix}-spacing-button-y: calc(var(--${prefix}-spacing-unit) * 3);
  --${prefix}-spacing-input-x: calc(var(--${prefix}-spacing-unit) * 4);
  --${prefix}-spacing-input-y: calc(var(--${prefix}-spacing-unit) * 3);
  --${prefix}-spacing-card: calc(var(--${prefix}-spacing-unit) * 6);
  
  /* Container */
  --${prefix}-container-max-width: 90rem;
  
  /* Borders */
  --${prefix}-border-thin: 1px;
  --${prefix}-border-regular: 2px;
  --${prefix}-border-thick: 3px;
  
  /* Border radius values */
  --${prefix}-radius-base: 0.45rem;
  --${prefix}-radius-xs: 0.125rem;
  --${prefix}-radius-sm: 0.25rem;
  --${prefix}-radius-md: 0.5rem;
  --${prefix}-radius-lg: 1rem;
  --${prefix}-radius-xl: 1.5rem;
  --${prefix}-radius-full: 9999px;
  
  /* Component-specific radius */
  --${prefix}-radius-button: var(--${prefix}-radius-md);
  --${prefix}-radius-input: var(--${prefix}-radius-sm);
  --${prefix}-radius-card: var(--${prefix}-radius-lg);
  
  /* Elevation */
  --${prefix}-shadow-color: 220deg 30% 10%;
  --${prefix}-shadow-strength: 0.15;
  --${prefix}-shadow-ambient-strength: 0.09;
  
  /* Shadow values */
  --${prefix}-shadow-xs: 0 1px 2px -1px rgba(0, 0, 0, var(--${prefix}-shadow-strength));
  --${prefix}-shadow-sm: 0 1px 3px -1px rgba(0, 0, 0, var(--${prefix}-shadow-strength)), 0 1px 2px -1px rgba(0, 0, 0, var(--${prefix}-shadow-ambient-strength));
  --${prefix}-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, var(--${prefix}-shadow-strength)), 0 2px 4px -2px rgba(0, 0, 0, var(--${prefix}-shadow-ambient-strength));
  --${prefix}-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, var(--${prefix}-shadow-strength)), 0 4px 6px -4px rgba(0, 0, 0, var(--${prefix}-shadow-ambient-strength));
  --${prefix}-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, var(--${prefix}-shadow-strength)), 0 8px 10px -6px rgba(0, 0, 0, var(--${prefix}-shadow-ambient-strength));
  
  /* Motion */
  --${prefix}-duration-fastest: 45ms;
  --${prefix}-duration-fast: 90ms;
  --${prefix}-duration-normal: 180ms;
  --${prefix}-duration-slow: 300ms;
  --${prefix}-duration-slower: 450ms;
  
  --${prefix}-easing-productive: cubic-bezier(0, 0, 0.2, 1);
  --${prefix}-easing-expressive: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Color System Configuration */
  --${prefix}-color-tint-scale: ${colorFactors["tint-scale"]};
  --${prefix}-color-shade-scale: ${colorFactors["shade-scale"]};
  --${prefix}-color-chroma-shift: ${colorFactors["chroma-shift"]};
  --${prefix}-color-chroma-neutral: ${colorFactors["chroma-neutral"]};

  /* Define Core Color and Harmony Shifts */
  --${prefix}-color-core-01: var(--${prefix}-color-core);
  
  /* IMPORTANT: There's an unusual inconsistency in browser rendering of OKLCH hue angles.
     While mathematically equivalent, we've found that positive angle 90° renders the correct purple color,
     while the negative equivalent (-90°) renders as green. This is contrary to our initial findings.
     
     Use the specific angle values tested in your design system to ensure correct rendering.
     Always verify color rendering in multiple browsers.
  */
  --${prefix}-color-core-02: ${harmonyShifts["core-02"]}; /* Shift from base */
  --${prefix}-color-core-03: ${harmonyShifts["core-03"]}; /* Shift from base */
  --${prefix}-color-core-04: ${harmonyShifts["core-04"]}; /* Shift from base */
  --${prefix}-color-core-05: ${harmonyShifts["core-05"]}; /* Shift from base */
  --${prefix}-color-core-06: ${harmonyShifts["core-06"]}; /* Shift from base */
  --${prefix}-color-core-07: ${harmonyShifts["core-07"]}; /* Shift from base */
  --${prefix}-color-core-08: ${harmonyShifts["core-08"]}; /* Shift from base */
  --${prefix}-color-core-09: ${harmonyShifts["core-09"]}; /* Shift from base */
  --${prefix}-color-core-10: ${harmonyShifts["core-10"]}; /* Shift from base */
  --${prefix}-color-core-11: ${harmonyShifts["core-11"]}; /* Shift from base */
  --${prefix}-color-core-12: ${harmonyShifts["core-12"]}; /* Shift from base */

  /* Tint-Shade Factors */
  --${prefix}-color-tint-04: calc(pow(var(--${prefix}-color-tint-scale), 9));
  --${prefix}-color-tint-03: calc(pow(var(--${prefix}-color-tint-scale), 6));
  --${prefix}-color-tint-02: calc(pow(var(--${prefix}-color-tint-scale), 3));
  --${prefix}-color-tint-01: calc(pow(var(--${prefix}-color-tint-scale), 2));
  --${prefix}-color-shade-01: calc(pow(var(--${prefix}-color-shade-scale), -2));
  --${prefix}-color-shade-02: calc(pow(var(--${prefix}-color-shade-scale), -3));
  --${prefix}-color-shade-03: calc(pow(var(--${prefix}-color-shade-scale), -6));
  --${prefix}-color-shade-04: calc(pow(var(--${prefix}-color-shade-scale), -9));

  /* Chroma Shift Definitions */
  --${prefix}-chroma-shift-100: calc(c * var(--${prefix}-color-chroma-shift) - .175);
  --${prefix}-chroma-shift-200: calc(c * var(--${prefix}-color-chroma-shift) - .1);
  --${prefix}-chroma-shift-300: calc(c * var(--${prefix}-color-chroma-shift));
  --${prefix}-chroma-shift-400: calc(c * var(--${prefix}-color-chroma-shift));
  --${prefix}-chroma-shift-500: calc(c * var(--${prefix}-color-chroma-shift));
  --${prefix}-chroma-shift-600: calc(c * var(--${prefix}-color-chroma-shift));
  --${prefix}-chroma-shift-700: calc(c * var(--${prefix}-color-chroma-shift));
  --${prefix}-chroma-shift-800: calc(c * var(--${prefix}-color-chroma-shift));
  --${prefix}-chroma-shift-900: calc(c * var(--${prefix}-color-chroma-shift));

  /* Neutral Colors */
  --${prefix}-color-core-00-100: oklch(from var(--${prefix}-color-core-01) calc(l * pow(var(--${prefix}-color-tint-scale), 4)) calc(c * var(--${prefix}-color-chroma-neutral)) h / 1);
  --${prefix}-color-core-00-200: oklch(from var(--${prefix}-color-core-01) calc(l * pow(var(--${prefix}-color-tint-scale), 3)) calc(c * var(--${prefix}-color-chroma-neutral)) h / 1);
  --${prefix}-color-core-00-300: oklch(from var(--${prefix}-color-core-01) calc(l * pow(var(--${prefix}-color-tint-scale), 2)) calc(c * var(--${prefix}-color-chroma-neutral)) h / 1);
  --${prefix}-color-core-00-400: oklch(from var(--${prefix}-color-core-01) calc(l * pow(var(--${prefix}-color-tint-scale), 1)) calc(c * var(--${prefix}-color-chroma-neutral)) h / 1);
  --${prefix}-color-core-00-500: oklch(from var(--${prefix}-color-core-01) calc(l * pow(1, 0)) calc(c * var(--${prefix}-color-chroma-neutral)) h / 1);
  --${prefix}-color-core-00-600: oklch(from var(--${prefix}-color-core-01) calc(l * pow(var(--${prefix}-color-shade-scale), -1)) calc(c * var(--${prefix}-color-chroma-neutral)) h / 1);
  --${prefix}-color-core-00-700: oklch(from var(--${prefix}-color-core-01) calc(l * pow(var(--${prefix}-color-shade-scale), -2)) calc(c * var(--${prefix}-color-chroma-neutral)) h / 1);
  --${prefix}-color-core-00-800: oklch(from var(--${prefix}-color-core-01) calc(l * pow(var(--${prefix}-color-shade-scale), -3)) calc(c * var(--${prefix}-color-chroma-neutral)) h / 1);
  --${prefix}-color-core-00-900: oklch(from var(--${prefix}-color-core-01) calc(l * pow(var(--${prefix}-color-shade-scale), -4)) calc(c * var(--${prefix}-color-chroma-neutral)) h / 1);

  /* 01 Colors (Base Color) */
  --${prefix}-color-core-01-100: oklch(from var(--${prefix}-color-core-01) calc(l * var(--${prefix}-color-tint-04)) var(--${prefix}-chroma-shift-100) h / 1);
  --${prefix}-color-core-01-200: oklch(from var(--${prefix}-color-core-01) calc(l * var(--${prefix}-color-tint-03)) var(--${prefix}-chroma-shift-200) h / 1);
  --${prefix}-color-core-01-300: oklch(from var(--${prefix}-color-core-01) calc(l * var(--${prefix}-color-tint-02)) var(--${prefix}-chroma-shift-300) h / 1);
  --${prefix}-color-core-01-400: oklch(from var(--${prefix}-color-core-01) calc(l * var(--${prefix}-color-tint-01)) var(--${prefix}-chroma-shift-400) h / 1);
  --${prefix}-color-core-01-500: oklch(from var(--${prefix}-color-core-01) l var(--${prefix}-chroma-shift-500) h / 1);
  --${prefix}-color-core-01-600: oklch(from var(--${prefix}-color-core-01) calc(l * var(--${prefix}-color-shade-01)) var(--${prefix}-chroma-shift-600) h / 1);
  --${prefix}-color-core-01-700: oklch(from var(--${prefix}-color-core-01) calc(l * var(--${prefix}-color-shade-02)) var(--${prefix}-chroma-shift-700) h / 1);
  --${prefix}-color-core-01-800: oklch(from var(--${prefix}-color-core-01) calc(l * var(--${prefix}-color-shade-03)) var(--${prefix}-chroma-shift-800) h / 1);
  --${prefix}-color-core-01-900: oklch(from var(--${prefix}-color-core-01) calc(l * var(--${prefix}-color-shade-04)) var(--${prefix}-chroma-shift-900) h / 1);

  /* Generate color variations for all harmony shifts */
`;

// Generate color definitions for all harmony shifts
for (let i = 2; i <= 12; i++) {
  const coreNum = String(i).padStart(2, '0');
  
  cssContent += `
  /* Core-${coreNum} Colors */
  --${prefix}-color-core-${coreNum}-100: oklch(from var(--${prefix}-color-core-01) calc(l * var(--${prefix}-color-tint-04)) var(--${prefix}-chroma-shift-100) calc(h + var(--${prefix}-color-core-${coreNum})) / 1);
  --${prefix}-color-core-${coreNum}-200: oklch(from var(--${prefix}-color-core-01) calc(l * var(--${prefix}-color-tint-03)) var(--${prefix}-chroma-shift-200) calc(h + var(--${prefix}-color-core-${coreNum})) / 1);
  --${prefix}-color-core-${coreNum}-300: oklch(from var(--${prefix}-color-core-01) calc(l * var(--${prefix}-color-tint-02)) var(--${prefix}-chroma-shift-300) calc(h + var(--${prefix}-color-core-${coreNum})) / 1);
  --${prefix}-color-core-${coreNum}-400: oklch(from var(--${prefix}-color-core-01) calc(l * var(--${prefix}-color-tint-01)) var(--${prefix}-chroma-shift-400) calc(h + var(--${prefix}-color-core-${coreNum})) / 1);
  --${prefix}-color-core-${coreNum}-500: oklch(from var(--${prefix}-color-core-01) l var(--${prefix}-chroma-shift-500) calc(h + var(--${prefix}-color-core-${coreNum})) / 1);
  --${prefix}-color-core-${coreNum}-600: oklch(from var(--${prefix}-color-core-01) calc(l * var(--${prefix}-color-shade-01)) var(--${prefix}-chroma-shift-600) calc(h + var(--${prefix}-color-core-${coreNum})) / 1);
  --${prefix}-color-core-${coreNum}-700: oklch(from var(--${prefix}-color-core-01) calc(l * var(--${prefix}-color-shade-02)) var(--${prefix}-chroma-shift-700) calc(h + var(--${prefix}-color-core-${coreNum})) / 1);
  --${prefix}-color-core-${coreNum}-800: oklch(from var(--${prefix}-color-core-01) calc(l * var(--${prefix}-color-shade-03)) var(--${prefix}-chroma-shift-800) calc(h + var(--${prefix}-color-core-${coreNum})) / 1);
  --${prefix}-color-core-${coreNum}-900: oklch(from var(--${prefix}-color-core-01) calc(l * var(--${prefix}-color-shade-04)) var(--${prefix}-chroma-shift-900) calc(h + var(--${prefix}-color-core-${coreNum})) / 1);`;
}

// Add the semantic mappings
const semantic = oliviaProfile["design-system"].colors.semantic;

cssContent += `\n\n  /* Semantic color assignments - Dark Mode (Default) */\n`;
cssContent += `  --${prefix}-brand-primary: var(--${prefix}-color-${semantic.brand.primary});\n`;
cssContent += `  --${prefix}-brand-secondary: var(--${prefix}-color-${semantic.brand.secondary});\n\n`;

cssContent += `  --${prefix}-bg-primary: var(--${prefix}-color-${semantic.background.primary});\n`;
cssContent += `  --${prefix}-bg-secondary: var(--${prefix}-color-${semantic.background.secondary});\n`;
cssContent += `  --${prefix}-bg-tertiary: var(--${prefix}-color-${semantic.background.tertiary});\n`;
cssContent += `  --${prefix}-bg-accent: var(--${prefix}-color-${semantic.background.accent});\n\n`;

cssContent += `  --${prefix}-text-primary: var(--${prefix}-color-${semantic.text.primary});\n`;
cssContent += `  --${prefix}-text-secondary: var(--${prefix}-color-${semantic.text.secondary});\n`;
cssContent += `  --${prefix}-text-tertiary: var(--${prefix}-color-${semantic.text.tertiary});\n`;
cssContent += `  --${prefix}-text-accent: var(--${prefix}-color-${semantic.text.accent});\n\n`;

cssContent += `  --${prefix}-component-primary: var(--${prefix}-color-${semantic.component.primary});\n`;
cssContent += `  --${prefix}-component-secondary: var(--${prefix}-color-${semantic.component.secondary});\n`;
cssContent += `  --${prefix}-component-accent: var(--${prefix}-color-${semantic.component.accent});\n\n`;

cssContent += `  --${prefix}-status-success: var(--${prefix}-color-${semantic.status.success});\n`;
cssContent += `  --${prefix}-status-warning: var(--${prefix}-color-${semantic.status.warning});\n`;
cssContent += `  --${prefix}-status-error: var(--${prefix}-color-${semantic.status.error});\n`;
cssContent += `  --${prefix}-status-info: var(--${prefix}-color-${semantic.status.info});\n`;

// End the root
cssContent += `}\n\n`;

// Add light mode variables
cssContent += `/* Light Mode Variables */\n`;
cssContent += `.light-mode {\n`;
cssContent += `  --${prefix}-bg-primary: var(--${prefix}-color-core-00-100);\n`;
cssContent += `  --${prefix}-bg-secondary: var(--${prefix}-color-core-00-200);\n`;
cssContent += `  --${prefix}-bg-tertiary: var(--${prefix}-color-core-00-300);\n`;
cssContent += `  --${prefix}-bg-accent: var(--${prefix}-color-core-05-300);\n\n`;

cssContent += `  --${prefix}-text-primary: var(--${prefix}-color-core-00-900);\n`;
cssContent += `  --${prefix}-text-secondary: var(--${prefix}-color-core-00-800);\n`;
cssContent += `  --${prefix}-text-tertiary: var(--${prefix}-color-core-00-700);\n\n`;

cssContent += `  --${prefix}-component-secondary: var(--${prefix}-color-core-00-400);\n\n`;

cssContent += `  --${prefix}-shadow-color: 220deg 10% 40%;\n`;
cssContent += `}\n`;

// Write the generated CSS to a file
console.log('CSS content for base color: ', cssContent.substring(0, 200));
fs.writeFileSync('./generated-styles.css', cssContent);
console.log('Generated CSS file with correct color harmony shifts and theme variants.'); 