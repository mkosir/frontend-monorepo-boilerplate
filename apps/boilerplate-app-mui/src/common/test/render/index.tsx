import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { theme } from 'ui-mui';

type RenderWithTheme = (elm: React.ReactElement, renderOptions?: RenderOptions) => RenderResult;

export type PropsWithChildren = { children?: React.ReactNode | undefined };

export const renderWithTheme: RenderWithTheme = (component, renderOptions?) => {
  const wrapper = ({ children }: PropsWithChildren) => <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;

  return render(component, { wrapper, ...renderOptions });
};
