import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
// Icons & Images //
import { House, MapPin, ShoppingCart } from 'phosphor-react'
import LogoCoffeeDelivery from '../../assets/logo.svg'
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

  return (
    <HeaderContainer>
      <img src={LogoCoffeeDelivery} alt="Copo de café" />
      <div>
        <LocationBadge>
          <MapPin size={18} weight="fill" />
          Taboão da Serra, SP
        </LocationBadge>

        <HomeButton onClick={() => navigate('/')}>
          <House size={18} weight="bold" />
        </HomeButton>

        <CartButton
          onClick={() => navigate('/checkout')}
          numberToItensAtShopCart={cart.length}
        >
          <ShoppingCart size={18} weight="fill" />
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
