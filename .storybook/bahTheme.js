import { create } from '@storybook/theming/create';
import { styled } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#002554',
  colorSecondary: '#7ec51e',

  // UI
  appBg: '#f5f5f5',
  appContentBg: '#f6f6f6',
  appBorderColor: 'grey',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Roboto", sans-serif !important',
  fontCode: 'monospace',

  // Text colors
  /* textColor: '#ffffff',
  textInverseColor: 'rgba(255,255,255,0.9)', */

  // Toolbar default and active colors
  /* barTextColor: 'white',
  barSelectedColor: 'black',
  barBg: 'white', */

  // Form colors
  /* inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4, */

  brandTitle: 'bet-at-home custom storybook',
  brandUrl: 'https://www.bet-at-home.com/',
  brandImage: 'https://www.bet-at-home.com/vstatic/bff696eda141f3a9e00ed3634adb1a6506/images/svg/bah-logo.svg',

  /* addonActionsTheme: {
    BASE_FONT_FAMILY: '"Roboto", sans-serif',
    BASE_BACKGROUND_COLOR: 'transparent',
  } */
});
