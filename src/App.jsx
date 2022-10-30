import React from 'react'
import '@fontsource/montserrat'
import * as Manrope from '@fontsource/manrope'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'
import { Intro, Contact, Footer, Portfolio } from './section'
import { Blog } from './section/blog'
import { Journey } from './section/journey'
import { Testimonials } from './section/testimonial'
import { fonts, palette, typography } from './style'

export function App() {
  const theme = createTheme(createTheme(), {
    palette,
    typography,
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

      <Box sx={{ mx: 3 }}>
        <Intro />
        <Journey />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
