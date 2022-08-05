import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <GlobalStyles />

        <p>Hello</p>
      </div>
    </ThemeProvider>
  )
}

export default App
