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

// Calculate complementary hue shift (180 degrees from base)
const complementaryHueShift = 180;
// Calculate triadic harmony shifts (120 degrees from base)
const triadicShift1 = 120;
const triadicShift2 = 240;
// Calculate analogous shifts (30 degrees from base)
const analogousShift1 = 30;
const analogousShift2 = -30;
// Calculate split complementary shifts (150 degrees from base)
const splitComplementaryShift1 = 150; 
const splitComplementaryShift2 = 210;
// Calculate tetradic harmony shifts (90 degrees apart)
const tetradicShift1 = 90;
const tetradicShift2 = 180;
const tetradicShift3 = 270;

cssContent += `\n  /* Dynamic Semantic Color Rules */\n`;
// Advanced color relationships
cssContent += `  /* Complementary */\n`;
cssContent += `  --${prefix}-brand-hue-complementary: calc(h + ${complementaryHueShift});\n\n`;

cssContent += `  /* Triadic */\n`;
cssContent += `  --${prefix}-brand-hue-triadic-1: calc(h + ${triadicShift1});\n`;
cssContent += `  --${prefix}-brand-hue-triadic-2: calc(h + ${triadicShift2});\n\n`;

cssContent += `  /* Analogous */\n`;
cssContent += `  --${prefix}-brand-hue-analogous-1: calc(h + ${analogousShift1});\n`;
cssContent += `  --${prefix}-brand-hue-analogous-2: calc(h + ${analogousShift2});\n\n`;

cssContent += `  /* Split Complementary */\n`;
cssContent += `  --${prefix}-brand-hue-split-comp-1: calc(h + ${splitComplementaryShift1});\n`;
cssContent += `  --${prefix}-brand-hue-split-comp-2: calc(h + ${splitComplementaryShift2});\n\n`;

cssContent += `  /* Tetradic */\n`;
cssContent += `  --${prefix}-brand-hue-tetradic-1: calc(h + ${tetradicShift1});\n`;
cssContent += `  --${prefix}-brand-hue-tetradic-2: calc(h + ${tetradicShift2});\n`;
cssContent += `  --${prefix}-brand-hue-tetradic-3: calc(h + ${tetradicShift3});\n\n`;

cssContent += `  /* Monochromatic Intensity Shifts (maintain hue, vary lightness/chroma) */\n`;
cssContent += `  --${prefix}-brand-mono-lighter: oklch(from var(--${prefix}-color-core-01) calc(l * 1.2) c h / 1);\n`;
cssContent += `  --${prefix}-brand-mono-darker: oklch(from var(--${prefix}-color-core-01) calc(l * 0.8) c h / 1);\n`;
cssContent += `  --${prefix}-brand-mono-saturated: oklch(from var(--${prefix}-color-core-01) l calc(c * 1.3) h / 1);\n`;
cssContent += `  --${prefix}-brand-mono-muted: oklch(from var(--${prefix}-color-core-01) l calc(c * 0.7) h / 1);\n\n`;

// Semantic Status Colors Function - dynamically computes status colors based on common hues
cssContent += `  /* Status Color Semantic Meaning Definitions */\n`;
cssContent += `  --${prefix}-success-hue: 135; /* Green */\n`;
cssContent += `  --${prefix}-warning-hue: 40; /* Gold/Yellow */\n`;
cssContent += `  --${prefix}-error-hue: 15; /* Red */\n`;
cssContent += `  --${prefix}-info-hue: 220; /* Blue */\n\n`;

// Status color dynamic functions
cssContent += `  /* Status Colors - Dynamic Calculations */\n`;
cssContent += `  --${prefix}-status-success-base: oklch(from var(--${prefix}-color-core-01) l calc(c * 1.3) var(--${prefix}-success-hue) / 1);\n`;
cssContent += `  --${prefix}-status-warning-base: oklch(from var(--${prefix}-color-core-01) l calc(c * 1.3) var(--${prefix}-warning-hue) / 1);\n`;
cssContent += `  --${prefix}-status-error-base: oklch(from var(--${prefix}-color-core-01) l calc(c * 1.3) var(--${prefix}-error-hue) / 1);\n`;
cssContent += `  --${prefix}-status-info-base: oklch(from var(--${prefix}-color-core-01) l calc(c * 1.3) var(--${prefix}-info-hue) / 1);\n\n`;

// State modifier factors - define how much to adjust colors for different states
cssContent += `  /* Interactive State Modifiers */\n`;
cssContent += `  --${prefix}-state-hover-lightness: 0.95; /* Darken slightly for hover */\n`;
cssContent += `  --${prefix}-state-active-lightness: 0.9; /* Darken more for active/pressed */\n`;
cssContent += `  --${prefix}-state-focus-opacity: 0.25; /* Opacity for focus rings */\n`;
cssContent += `  --${prefix}-state-disabled-opacity: 0.6; /* Reduce opacity for disabled state */\n`;
cssContent += `  --${prefix}-state-disabled-saturation: 0.7; /* Reduce saturation for disabled state */\n\n`;

cssContent += `  /* Semantic color assignments - Dark Mode (Default) */\n`;

// Update brand colors - make brand-primary based on core-01-500 (the base color)
cssContent += `  --${prefix}-brand-primary: var(--${prefix}-color-core-01-500);\n`;
// Brand secondary is now based on an analogous color (more harmonious than complementary)
cssContent += `  --${prefix}-brand-secondary: oklch(from var(--${prefix}-color-core-01) l var(--${prefix}-chroma-shift-500) var(--${prefix}-brand-hue-analogous-1) / 1);\n\n`;

// Keep background colors as is - they are neutral by design
cssContent += `  --${prefix}-bg-primary: var(--${prefix}-color-core-00-900);\n`;
cssContent += `  --${prefix}-bg-secondary: var(--${prefix}-color-core-00-800);\n`;
cssContent += `  --${prefix}-bg-tertiary: var(--${prefix}-color-core-00-700);\n`;
// Update accent background to use the brand-primary hue but with reduced saturation
cssContent += `  --${prefix}-bg-accent: oklch(from var(--${prefix}-color-core-01) calc(l * var(--${prefix}-color-shade-03)) calc(c * 0.8) h / 1);\n\n`;

// Keep text colors using neutrals
cssContent += `  --${prefix}-text-primary: var(--${prefix}-color-core-00-100);\n`;
cssContent += `  --${prefix}-text-secondary: var(--${prefix}-color-core-00-200);\n`;
cssContent += `  --${prefix}-text-tertiary: var(--${prefix}-color-core-00-300);\n`;
// Text accent should use the brand primary color but lighter for better readability
cssContent += `  --${prefix}-text-accent: var(--${prefix}-color-core-01-300);\n\n`;

// Components now derived from the brand colors
cssContent += `  --${prefix}-component-primary: var(--${prefix}-brand-primary);\n`;
cssContent += `  --${prefix}-component-secondary: var(--${prefix}-color-core-00-700);\n`;
cssContent += `  --${prefix}-component-accent: var(--${prefix}-brand-secondary);\n\n`;

// Interactive states for components - hover, active, focus, disabled
cssContent += `  /* Component Interactive States */\n`;
// Primary component states
cssContent += `  --${prefix}-component-primary-hover: oklch(from var(--${prefix}-component-primary) calc(l * var(--${prefix}-state-hover-lightness)) c h / 1);\n`;
cssContent += `  --${prefix}-component-primary-active: oklch(from var(--${prefix}-component-primary) calc(l * var(--${prefix}-state-active-lightness)) c h / 1);\n`;
cssContent += `  --${prefix}-component-primary-focus: oklch(from var(--${prefix}-component-primary) l c h / var(--${prefix}-state-focus-opacity));\n`;
cssContent += `  --${prefix}-component-primary-disabled: oklch(from var(--${prefix}-component-primary) l calc(c * var(--${prefix}-state-disabled-saturation)) h / var(--${prefix}-state-disabled-opacity));\n\n`;

// Secondary component states
cssContent += `  --${prefix}-component-secondary-hover: oklch(from var(--${prefix}-component-secondary) calc(l * var(--${prefix}-state-hover-lightness)) c h / 1);\n`;
cssContent += `  --${prefix}-component-secondary-active: oklch(from var(--${prefix}-component-secondary) calc(l * var(--${prefix}-state-active-lightness)) c h / 1);\n`;
cssContent += `  --${prefix}-component-secondary-focus: oklch(from var(--${prefix}-component-secondary) l c h / var(--${prefix}-state-focus-opacity));\n`;
cssContent += `  --${prefix}-component-secondary-disabled: oklch(from var(--${prefix}-component-secondary) l calc(c * var(--${prefix}-state-disabled-saturation)) h / var(--${prefix}-state-disabled-opacity));\n\n`;

// Accent component states
cssContent += `  --${prefix}-component-accent-hover: oklch(from var(--${prefix}-component-accent) calc(l * var(--${prefix}-state-hover-lightness)) c h / 1);\n`;
cssContent += `  --${prefix}-component-accent-active: oklch(from var(--${prefix}-component-accent) calc(l * var(--${prefix}-state-active-lightness)) c h / 1);\n`;
cssContent += `  --${prefix}-component-accent-focus: oklch(from var(--${prefix}-component-accent) l c h / var(--${prefix}-state-focus-opacity));\n`;
cssContent += `  --${prefix}-component-accent-disabled: oklch(from var(--${prefix}-component-accent) l calc(c * var(--${prefix}-state-disabled-saturation)) h / var(--${prefix}-state-disabled-opacity));\n\n`;

// Focus ring color - more visible version of the primary color
cssContent += `  --${prefix}-focus-ring: oklch(from var(--${prefix}-component-primary) l calc(c * 1.1) h / var(--${prefix}-state-focus-opacity));\n\n`;

// Status colors are now generated dynamically 
cssContent += `  /* Status Colors */\n`;
cssContent += `  --${prefix}-status-success: var(--${prefix}-status-success-base);\n`;
cssContent += `  --${prefix}-status-warning: var(--${prefix}-status-warning-base);\n`;
cssContent += `  --${prefix}-status-error: var(--${prefix}-status-error-base);\n`;
cssContent += `  --${prefix}-status-info: var(--${prefix}-status-info-base);\n\n`;

// Interactive states for status colors
cssContent += `  /* Status Interactive States */\n`;
cssContent += `  --${prefix}-status-success-hover: oklch(from var(--${prefix}-status-success) calc(l * var(--${prefix}-state-hover-lightness)) c h / 1);\n`;
cssContent += `  --${prefix}-status-warning-hover: oklch(from var(--${prefix}-status-warning) calc(l * var(--${prefix}-state-hover-lightness)) c h / 1);\n`;
cssContent += `  --${prefix}-status-error-hover: oklch(from var(--${prefix}-status-error) calc(l * var(--${prefix}-state-hover-lightness)) c h / 1);\n`;
cssContent += `  --${prefix}-status-info-hover: oklch(from var(--${prefix}-status-info) calc(l * var(--${prefix}-state-hover-lightness)) c h / 1);\n`;

// End the root
cssContent += `}\n\n`;

// Add light mode variables with improved color mapping
cssContent += `/* Light Mode Variables */\n`;
cssContent += `.light-mode {\n`;
// Light backgrounds - lighter tertiary for better contrast
cssContent += `  --${prefix}-bg-primary: var(--${prefix}-color-core-00-100);\n`;
cssContent += `  --${prefix}-bg-secondary: var(--${prefix}-color-core-00-200);\n`;
cssContent += `  --${prefix}-bg-tertiary: var(--${prefix}-color-core-00-250);\n`;
// Light mode accent is now derived from the brand primary but much lighter
cssContent += `  --${prefix}-bg-accent: oklch(from var(--${prefix}-color-core-01) calc(l * var(--${prefix}-color-tint-04)) calc(c * 0.4) h / 1);\n\n`;

// Light mode text 
cssContent += `  --${prefix}-text-primary: var(--${prefix}-color-core-00-900);\n`;
cssContent += `  --${prefix}-text-secondary: var(--${prefix}-color-core-00-800);\n`;
cssContent += `  --${prefix}-text-tertiary: var(--${prefix}-color-core-00-700);\n\n`;

// Light mode brand and components - balanced for proper contrast while preserving Olivia's aesthetic
cssContent += `  --${prefix}-brand-primary: var(--${prefix}-color-core-01-500);\n`;
cssContent += `  --${prefix}-brand-secondary: oklch(from var(--${prefix}-color-core-01) calc(l * var(--${prefix}-color-tint-01)) var(--${prefix}-chroma-shift-500) var(--${prefix}-brand-hue-analogous-1) / 1);\n\n`;

// Light mode components 
cssContent += `  --${prefix}-component-primary: oklch(from var(--${prefix}-brand-primary) calc(l * 0.9) calc(c * 1.2) h / 1); /* Darker, more saturated primary */\n`;
cssContent += `  --${prefix}-component-secondary: var(--${prefix}-color-core-00-300);\n`;
cssContent += `  --${prefix}-component-accent: oklch(from var(--${prefix}-brand-secondary) calc(l * 0.85) calc(c * 1.3) h / 1); /* Darker, more saturated accent */\n\n`;

// Component text colors for light mode - ensure proper contrast
cssContent += `  /* Light Mode Component Text Colors */\n`;
cssContent += `  --${prefix}-component-text-primary: var(--${prefix}-color-core-00-100); /* Light text for primary buttons */\n`;
cssContent += `  --${prefix}-component-text-secondary: var(--${prefix}-color-core-00-900); /* Dark text for secondary buttons */\n`;
cssContent += `  --${prefix}-component-text-accent: var(--${prefix}-color-core-00-100); /* Light text for accent buttons */\n\n`;

// Update interactive states for light mode
cssContent += `  /* Light Mode Component Interactive States */\n`;
// Interactive states for light mode
cssContent += `  --${prefix}-component-primary-hover: oklch(from var(--${prefix}-component-primary) calc(l * 0.9) calc(c * 1.1) h / 1);\n`;
cssContent += `  --${prefix}-component-primary-active: oklch(from var(--${prefix}-component-primary) calc(l * 0.85) calc(c * 1.15) h / 1);\n`;
cssContent += `  --${prefix}-component-secondary-hover: oklch(from var(--${prefix}-component-secondary) calc(l * 0.92) c h / 1);\n`;
cssContent += `  --${prefix}-component-secondary-active: oklch(from var(--${prefix}-component-secondary) calc(l * 0.85) c h / 1);\n`;
cssContent += `  --${prefix}-component-accent-hover: oklch(from var(--${prefix}-component-accent) calc(l * 0.9) calc(c * 1.1) h / 1);\n`;
cssContent += `  --${prefix}-component-accent-active: oklch(from var(--${prefix}-component-accent) calc(l * 0.85) calc(c * 1.15) h / 1);\n\n`;

// Focus ring for light mode - more visible
cssContent += `  --${prefix}-focus-ring: oklch(from var(--${prefix}-component-primary) calc(l * 0.95) calc(c * 1.3) h / 0.35);\n\n`;

// Light mode status colors - softer and more pastel (higher lightness, lower chroma)
cssContent += `  /* Light Mode Status Colors */\n`;
cssContent += `  --${prefix}-status-success: oklch(from var(--${prefix}-status-success-base) calc(l * 1.3) calc(c * 0.75) h / 1);\n`;
cssContent += `  --${prefix}-status-warning: oklch(from var(--${prefix}-status-warning-base) calc(l * 1.3) calc(c * 0.75) h / 1);\n`;
cssContent += `  --${prefix}-status-error: oklch(from var(--${prefix}-status-error-base) calc(l * 1.3) calc(c * 0.75) h / 1);\n`;
cssContent += `  --${prefix}-status-info: oklch(from var(--${prefix}-status-info-base) calc(l * 1.3) calc(c * 0.75) h / 1);\n\n`;

// Light mode status hover states 
cssContent += `  --${prefix}-status-success-hover: oklch(from var(--${prefix}-status-success) calc(l * 0.95) calc(c * 1.1) h / 1);\n`;
cssContent += `  --${prefix}-status-warning-hover: oklch(from var(--${prefix}-status-warning) calc(l * 0.95) calc(c * 1.1) h / 1);\n`;
cssContent += `  --${prefix}-status-error-hover: oklch(from var(--${prefix}-status-error) calc(l * 0.95) calc(c * 1.1) h / 1);\n`;
cssContent += `  --${prefix}-status-info-hover: oklch(from var(--${prefix}-status-info) calc(l * 0.95) calc(c * 1.1) h / 1);\n\n`;

// Specific variable for neutral shade between 200 and 300 for light mode tertiary backgrounds
cssContent += `  --${prefix}-color-core-00-250: oklch(from var(--${prefix}-color-core-01) calc(l * pow(var(--${prefix}-color-tint-scale), 2.7)) calc(c * var(--${prefix}-color-chroma-neutral) * 0.8) h / 1);\n`;

cssContent += `  --${prefix}-shadow-color: 220deg 10% 40%;\n`;
cssContent += `}\n`;

// Write the generated CSS to a file
console.log('CSS content for base color: ', cssContent.substring(0, 200));
fs.writeFileSync('./generated-styles.css', cssContent);
console.log('Generated CSS file with correct color harmony shifts and theme variants.'); 