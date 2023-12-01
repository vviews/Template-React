import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components'
import { Route, Routes } from 'react-router-dom'
import { Exam, Home, Subject, Scan } from './pages'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { themeSettings } from './theme'

function App() {
  const theme = createTheme(themeSettings)
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/subject" element={<Subject/>} />
        <Route path="/exam" element={<Exam/>} />
        <Route path="/scan" element={<Scan/>} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
