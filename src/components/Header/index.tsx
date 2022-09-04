import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { useSwitchTheme } from '../../hooks/useSwitchTheme'
// Icons & Images //
import { House, MapPin, Moon, ShoppingCart, Sun } from 'phosphor-react'
import DarkLogoCoffeeDelivery from '../../assets/logo.svg'
import LightLogoCoffeeDelivery from '../../assets/logo-light.svg'
// Styles //
import {
  HeaderContainer,
  LocationBadge,
  CartButton,
  HomeButton,
} from './styles'

export function Header() {
  const navigate = useNavigate()
  const { cart } = useCart()
  const { toggleTheme, themeSelected } = useSwitchTheme()

  function handleToggleTheme() {
    toggleTheme(themeSelected === 'light' ? 'dark' : 'light')
  }

  return (
    <HeaderContainer>
      <img
        src={
          themeSelected === 'light'
            ? DarkLogoCoffeeDelivery
            : LightLogoCoffeeDelivery
        }
        alt="Copo de café"
      />
      <div>
        <LocationBadge title="Taboão da Serra, SP">
          <MapPin size={18} weight="fill" />
          <span>Taboão da Serra, SP</span>
        </LocationBadge>

        <HomeButton onClick={handleToggleTheme} title="Trocar tema">
          {themeSelected === 'light' ? (
            <Moon size={18} weight="bold" />
          ) : (
            <Sun size={18} weight="bold" />
          )}
        </HomeButton>

        <HomeButton onClick={() => navigate('/')} title="Home">
          <House size={18} weight="bold" />
        </HomeButton>

        <CartButton
          title="Carrinho"
          onClick={() => navigate('/checkout')}
          numberToItensAtShopCart={cart.length}
        >
          <ShoppingCart size={18} weight="fill" />
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
