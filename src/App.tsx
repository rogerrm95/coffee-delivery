import { ToastContainer, Slide } from 'react-toastify'
// Contexts //
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'
import { SwitchThemeProvider } from './contexts/SwitchThemeContext'
// Routes //
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
// Styles //
import { GlobalStyles } from './styles/global'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <SwitchThemeProvider>
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
    </SwitchThemeProvider>
  )
}

export default App
