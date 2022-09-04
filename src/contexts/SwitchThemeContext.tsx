import { createContext, ReactNode, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { useLocalStorage } from '../hooks/useLocalStorage'
// Themes //
import { dark } from '../styles/themes/dark'
import { light } from '../styles/themes/light'

interface SwitchThemeProviderProps {
  children: ReactNode
}

type Theme = 'dark' | 'light'

interface SwitchThemeContextData {
  themeSelected: Theme
  toggleTheme: (themeActive: Theme) => void
}

export const SwitchThemeContext = createContext<SwitchThemeContextData>(
  {} as SwitchThemeContextData,
)

export function SwitchThemeProvider({ children }: SwitchThemeProviderProps) {
  const { saveToLocalStorage } = useLocalStorage()
  const [themeSelected, setThemeSelected] = useState(() => {
    const dataJSON = localStorage.getItem('@coffee-delivery:theme-active')

    if (dataJSON) {
      const data = JSON.parse(dataJSON)
      return data
    }

    return 'light'
  })

  function toggleTheme(themeActive: Theme) {
    setThemeSelected(themeActive)
    saveToLocalStorage(themeActive, '@coffee-delivery:theme-active')
  }

  return (
    <SwitchThemeContext.Provider value={{ themeSelected, toggleTheme }}>
      <ThemeProvider theme={themeSelected === 'light' ? light : dark}>
        {children}
      </ThemeProvider>
    </SwitchThemeContext.Provider>
  )
}
