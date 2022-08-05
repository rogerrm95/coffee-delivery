// Arquvio de definição de tipos //
// Arquivo necessário para identificar os tipos de cores pelo Typescript //

import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

export type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
