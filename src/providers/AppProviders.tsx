import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react'

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const AppProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* CssBaseline applies a few color defaults with the dark mode */}
            {children}
        </ThemeProvider>
    )
}

export default AppProviders