import React from 'react'
import * as Manrope from '@fontsource/manrope'
import '@fontsource/montserrat'
import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material'
import myPalette from './style/palette'
import { fonts } from './style/font'
import Homepage from './Homepage'

function App() {
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
      }
    },
    shape: {
      borderRadius: 5
    }
  })

  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <Homepage />
    </ThemeProvider>
  )
}

export default App
