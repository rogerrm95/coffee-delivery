// Arquvio de definição de tipos //
// Arquivo necessário para identificar os tipos de cores pelo Typescript //

import 'styled-components'
import { light } from '../styles/themes/light'

export type ThemeType = typeof light

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
