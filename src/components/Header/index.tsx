import { useNavigate } from 'react-router-dom'
// Icons & Images //
import { MapPin, ShoppingCart } from 'phosphor-react'
import LogoCoffeeDelivery from '../../assets/logo.svg'

// Styles //
import { HeaderContainer, LocationBadge, CartButton } from './styles'

export function Header() {
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <img
        src={LogoCoffeeDelivery}
        alt="Copo de café"
        onClick={() => navigate('/')}
      />
      <div>
        <LocationBadge>
          <MapPin size={18} weight="fill" />
          Taboão da Serra, SP
        </LocationBadge>

        <CartButton onClick={() => navigate('/checkout')}>
          <ShoppingCart size={18} weight="fill" />
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
