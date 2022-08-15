import { ThemeProvider } from 'styled-components'
// Routes //
import { BrowserRouter } from 'react-router-dom'
// Styles //
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/light'
import Router from './Router'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShoppingCartProvider>
          <Router />
          <GlobalStyles />
        </ShoppingCartProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
