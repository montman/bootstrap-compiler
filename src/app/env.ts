export type VariableStatus = {
  name: string,
  value: string,
  unit?: string,
}
export type Variable = VariableStatus & {
  description: string;
  group: string;
};
export const OVERRIDABLE_VARIABLES: Variable[] = [
  {
    name: 'primary',
    value: '#0d6efd',
    group: 'COLORS',
    description: 'Primary Color',
  },
  {
    name: 'secondary',
    value: '#6c757d',
    group: 'COLORS',
    description: 'Secondary Color',
  },
  {
    name: 'success',
    value: '#198754',
    group: 'COLORS',
    description: 'Success Color',
  },
  {
    name: 'info',
    value: '#0dcaf0',
    group: 'COLORS',
    description: 'Info Color',
  },
  {
    name: 'warning',
    value: '#ffc107',
    group: 'COLORS',
    description: 'Warning Color',
  },
  {
    name: 'danger',
    value: '#dc3545',
    group: 'COLORS',
    description: 'Danger Color',
  },
  {
    name: 'light',
    value: '#f8f9fa',
    group: 'COLORS',
    description: 'Light Color',
  },
  {
    name: 'dark',
    value: '#212529',
    group: 'COLORS',
    description: 'Dark Color',
  },
  {
    name: 'font-size-base',
    value: '1',
    group: 'FONT',
    description: 'Base Font Size (rem)',
    unit: 'rem'
  },
];

export const COLOR_VARIABLES: Variable[] = OVERRIDABLE_VARIABLES.filter(el => el.group == 'COLORS')
export const FONT_VARIABLES: Variable[] = OVERRIDABLE_VARIABLES.filter(el => el.group == 'FONT')