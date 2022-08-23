import { ThemeProvider } from 'styled-components'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar
            closeOnClick
            pauseOnFocusLoss={false}
            pauseOnHover={false}
            draggable={false}
            transition={Slide}
            limit={2}
            toastStyle={{ zIndex: 9999 }}
          />
          <GlobalStyles />
        </ShoppingCartProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
