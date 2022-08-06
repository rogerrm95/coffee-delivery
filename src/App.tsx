import { ThemeProvider } from 'styled-components'
// Routes //
import { BrowserRouter } from 'react-router-dom'
// Styles //
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/light'
import Router from './Router'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
