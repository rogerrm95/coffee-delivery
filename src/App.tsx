import { ThemeProvider } from 'styled-components'
import { ToastContainer, Slide } from 'react-toastify'
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
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar
            closeOnClick
            pauseOnFocusLoss={false}
            pauseOnHover={false}
            draggable={false}
            transition={Slide}
            limit={2}
          />
          <Router />
          <GlobalStyles />
        </ShoppingCartProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
