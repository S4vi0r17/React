import { CssBaseline, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import theme from './theme';

export const AppTheme = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

// /AppTheme.js
// import CssBaseline from '@mui/material/CssBaseline';
// import { ThemeProvider } from '@mui/material/styles';
 
// /purpleTheme.js
// import { createTheme } from '@mui/material/styles';
// import { red } from "@mui/material/colors";

// import { createTheme } from "@mui/system"; a esto import { createTheme } from "@mui/material/styles";.

