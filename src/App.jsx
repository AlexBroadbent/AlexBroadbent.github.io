import * as React from 'react'
import './App.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { yellow, green } from '@mui/material/colors'
import NavBar from './section/NavBar'
import '@fontsource/manrope'

function App() {
  const theme = createTheme({
    palette: {
      primary: green,
      secondary: yellow
    },
    typography: {
      fontFamily: 'manrope'
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar>
        <p>Hello World</p>
      </NavBar>
    </ThemeProvider>
  )
}

export default App
