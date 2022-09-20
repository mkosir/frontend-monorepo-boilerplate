/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { PaletteColor, PaletteColorOptions } from '@mui/material';
import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  // Theme
  interface Theme {
    brand: {
      blue: CSSProperties['color'];
      green: CSSProperties['color'];
    };
  }

  interface ThemeOptions {
    brand: {
      blue: CSSProperties['color'];
      green: CSSProperties['color'];
    };
  }

  // Palette
  interface Palette {
    neutral: PaletteColor;
  }

  interface PaletteOptions {
    neutral: PaletteColorOptions;
  }

  // Typography
  interface TypographyVariants {
    title1: React.CSSProperties;
    title2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    title1?: React.CSSProperties;
    title2?: React.CSSProperties;
  }

  // Breakpoints
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true;
    tablet: true;
    desktop: true;
  }
}

// Typography
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title1: true;
    title2: true;
    body1: false;
    body2: false;
    button: false;
  }
}
