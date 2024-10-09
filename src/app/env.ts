export type VariableStatus = {
  name: string,
  value: string,
}
export type Variable = VariableStatus & {
  description: string;
  unit?: string;
  formType: string
  tooltip?: string;
  step?: number
};
export const COLOR_VARIABLES: Variable[] = [
  {
    name: 'primary',
    value: '#0d6efd',
    description: 'Primary Color',
    formType: 'color'
  },
  {
    name: 'secondary',
    value: '#6c757d',
    description: 'Secondary Color',
    formType: 'color'
  },
  {
    name: 'info',
    value: '#0dcaf0',
    description: 'Info Color',
    formType: 'color'
  },
  {
    name: 'success',
    value: '#198754',
    description: 'Success Color',
    formType: 'color'
  },
  {
    name: 'warning',
    value: '#ffc107',
    description: 'Warning Color',
    formType: 'color'
  },
  {
    name: 'danger',
    value: '#dc3545',
    description: 'Danger Color',
    formType: 'color'
  },
  {
    name: 'light',
    value: '#f8f9fa',
    description: 'Light Color',
    formType: 'color'
  },
  {
    name: 'dark',
    value: '#212529',
    description: 'Dark Color',
    formType: 'color'
  },
  {
    name: 'min-contrast-ratio',
    value: '4.5',
    description: 'Contrast Ratio',
    tooltip: '3, 4.5 or 7 are suggested values',
    formType: 'number',
    step: 0.5
  }
];
export const FONT_VARIABLES: Variable[] = [
  {
    name: 'font-size-base',
    value: '1',
    description: 'Base Font Size',
    unit: "rem",
    formType: 'number',
    step: 0.05
  }
];
export const FONT_FAMILY_VARIABLES: Variable[] = [
  {
    name: 'font-family-sans-serif',
    value: `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default`,
    description: 'Default Font',
    formType: 'text'
  }
];
export const RADIUS_VARIABLES: Variable[] = [
  {
    name: 'border-radius',
    value: '0.375',
    description: 'Base Border Radius',
    unit: "rem",
    formType: 'number',
    step: 0.005
  },
  {
    name: 'border-radius-sm',
    value: '0.25',
    description: 'Small Border Radius',
    unit: "rem",
    formType: 'number',
    step: 0.005
  },
  {
    name: 'border-radius-lg',
    value: '0.5',
    description: 'Large Border Radius',
    unit: "rem",
    formType: 'number',
    step: 0.005
  },
  {
    name: 'border-radius-xl',
    value: '1',
    description: 'XL Border Radius',
    unit: "rem",
    formType: 'number',
    step: 0.005
  },
  {
    name: 'border-radius-xxl',
    value: '2',
    description: 'XXL Border Radius',
    unit: "rem",
    formType: 'number',
    step: 0.005
  },
  {
    name: 'border-radius-pill',
    value: '50',
    description: 'Pill Border Radius',
    unit: "rem",
    formType: 'number',
    step: 0.005
  },
];