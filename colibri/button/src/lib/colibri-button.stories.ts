// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { ColibriButtonComponent } from './colibri-button.component';

export default {
  title: 'Components/Button',
  component: ColibriButtonComponent,
} as Meta;

const template: Story<ColibriButtonComponent> = (args: ColibriButtonComponent) => ({
  component: ColibriButtonComponent,
  props: args,
});

export const primary = template.bind({});
primary.args = {
  type: 'primary',
  size: 'medium',
  label: 'Primary Button',
  disabled: false,
  loading: false,
  full: false
};

export const secondary = template.bind({});
secondary.args = {
  type: 'secondary',
  size: 'medium',
  label: 'Secondary Button',
  disabled: false,
  loading: false,
  full: false
};

export const disabled = template.bind({});
disabled.args = {
  type: 'primary',
  size: 'medium',
  label: 'Disabled Button',
  disabled: true,
  loading: false,
  full: false
};

export const loading = template.bind({});
loading.args = {
  type: 'primary',
  size: 'medium',
  label: 'Loading Button',
  disabled: false,
  loading: true,
  full: false
};

export const full = template.bind({});
full.args = {
  type: 'primary',
  size: 'medium',
  label: 'Full Button',
  disabled: false,
  loading: false,
  full: true
};
