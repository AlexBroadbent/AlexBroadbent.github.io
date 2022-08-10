import React from 'react'
import * as Manrope from '@fontsource/manrope'
import '@fontsource/montserrat'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'
import myPalette from './style/palette'
import { fonts } from './style/font'
import { Homepage } from './Homepage'

export function App() {
  const theme = createTheme(createTheme(), {
    palette: myPalette(),
    typography: {
      fontFamily: fonts
    },
    components: {
      MuiTypography: {
        fontFamily: fonts,
        styleOverrides: {
          root: {
            fontFamily: fonts
          }
        }
      },
      MuiCssBaseline: {
        fontFamily: fonts,
        styleOverrides: Manrope
      },
      MuiButton: {
        styleOverrides: {
          padding: 0
        }
      }
    },
    shape: {
      borderRadius: 10
    }
  })

  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <Homepage />
    </ThemeProvider>
  )
}
