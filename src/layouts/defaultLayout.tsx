import { Outlet } from 'react-router-dom'
// Components //
import { Header } from '../components/Header'
// Styles //
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />

      <Outlet />
    </LayoutContainer>
  )
}
