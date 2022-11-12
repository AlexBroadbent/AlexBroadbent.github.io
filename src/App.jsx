import * as Manrope from '@fontsource/manrope'
import '@fontsource/montserrat'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { Contact, Footer, Intro, Portfolio } from './section'
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

      <Box sx={{ mx: 2 }}>
        <Intro />
        <Portfolio />
        <Blog />
        <Journey />
        <Testimonials />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
