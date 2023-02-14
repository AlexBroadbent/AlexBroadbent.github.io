import '@fontsource/manrope/300.css'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/700.css'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { createContext, useContext, useMemo, useState } from 'react'
import { DarkModeSwitch } from './component'
import { useView } from './hook'
import { Contact, Footer, Intro, Portfolio } from './section'
import { Blog } from './section/blog'
import { Journey } from './section/journey'
import { Testimonials } from './section/testimonial'
import { fonts, typography } from './style'

const ColorModeContext = createContext({ toggleColorMode: () => {} })

const MyApp = () => {
  const theme = useTheme()
  const colorModeContext = useContext(ColorModeContext)

  return (
    <>
      <CssBaseline />

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          p: 3
        }}
      >
        <DarkModeSwitch
          checked={theme.palette.mode === 'dark'}
          onChange={colorModeContext.toggleColorMode}
          sx={{ m: 1 }}
        />
      </Box>

      {useView(
        <Box sx={{ margin: 'auto', width: '70%' }}>{views()}</Box>,
        <Box sx={{ mx: 2 }}>{views()}</Box>
      )}
    </>
  )
}

export function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        },
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
            enableColorScheme: true,
            fontFamily: fonts
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
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

const views = () => (
  <Box>
    <Intro />
    <Portfolio />
    <Blog />
    <Journey />
    <Testimonials />
    <Contact />
    <Footer />
  </Box>
)
