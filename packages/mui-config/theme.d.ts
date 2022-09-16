/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { PaletteColor, PaletteColorOptions } from '@mui/material';
import React from 'react';

declare module '@mui/material/styles' {
  interface Theme {
    brand: {
      blue: string;
      green: string;
    };
  }

  interface ThemeOptions {
    brand: {
      blue: React.CSSProperties['color'];
      green: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: PaletteColor;
  }

  interface PaletteOptions {
    neutral: PaletteColorOptions;
  }
}
