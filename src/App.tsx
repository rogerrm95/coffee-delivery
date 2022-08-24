import { ThemeProvider } from 'styled-components'
import { ToastContainer, Slide } from 'react-toastify'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'
// Routes //
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
// Styles //
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/light'
import 'react-toastify/dist/ReactToastify.css'

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
