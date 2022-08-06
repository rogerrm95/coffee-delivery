// Icons & Images //
import { MapPin, ShoppingCart } from 'phosphor-react'
import LogoCoffeeDelivery from '../../assets/logo.svg'

// Styles //
import { HeaderContainer, LocationBadge, CartButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffeeDelivery} alt="Copo de café" />
      <div>
        <LocationBadge>
          <MapPin size={18} weight="fill" />
          Taboão da Serra, SP
        </LocationBadge>

        <CartButton>
          <ShoppingCart size={18} weight="fill" />
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
