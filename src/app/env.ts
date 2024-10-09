export type VariableStatus = {
  name: string,
  value: string,
}
export type Variable = VariableStatus & {
  description: string;
  unit?: string;
};
export const COLOR_VARIABLES: Variable[] = [
  {
    name: 'primary',
    value: '#0d6efd',
    description: 'Primary Color',
  },
  {
    name: 'secondary',
    value: '#6c757d',
    description: 'Secondary Color',
  },
  {
    name: 'success',
    value: '#198754',
    description: 'Success Color',
  },
  {
    name: 'info',
    value: '#0dcaf0',
    description: 'Info Color',
  },
  {
    name: 'warning',
    value: '#ffc107',
    description: 'Warning Color',
  },
  {
    name: 'danger',
    value: '#dc3545',
    description: 'Danger Color',
  },
  {
    name: 'light',
    value: '#f8f9fa',
    description: 'Light Color',
  },
  {
    name: 'dark',
    value: '#212529',
    description: 'Dark Color',
  },
];
export const FONT_VARIABLES: Variable[] = [
  {
    name: 'font-size-base',
    value: '1',
    description: 'Base Font Size',
    unit: "rem"
  }
];
export const FONT_FAMILY_VARIABLES: Variable[] = [
  {
    name: 'font-family-sans-serif',
    value: `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default`,
    description: 'Default Font'
  }
];
export const RADIUS_VARIABLES: Variable[] = [
  {
    name: 'border-radius',
    value: '0.375',
    description: 'Base Border Radius',
    unit: "rem"
  },
  {
    name: 'border-radius-sm',
    value: '0.25',
    description: 'Small Border Radius',
    unit: "rem"
  },
  {
    name: 'border-radius-lg',
    value: '0.5',
    description: 'Large Border Radius',
    unit: "rem"
  },
  {
    name: 'border-radius-xl',
    value: '1',
    description: 'XL Border Radius',
    unit: "rem"
  },
  {
    name: 'border-radius-xxl',
    value: '2',
    description: 'XXL Border Radius',
    unit: "rem"
  },
  {
    name: 'border-radius-pill',
    value: '50',
    description: 'Pill Border Radius',
    unit: "rem"
  },
];