import { useContext } from 'react'
import { SwitchThemeContext } from '../contexts/SwitchThemeContext'

export function useSwitchTheme() {
  return useContext(SwitchThemeContext)
}
