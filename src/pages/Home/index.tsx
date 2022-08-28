// Utils //
import { coffeesList } from '../../utils/coffeeList'
// Images //
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import HeroImage from '../../assets/hero-image.png'
// Components //
import { ProductItem } from '../../components/ProductItem'
// Styles //
import {
  BadgeCart,
  BadgeCoffee,
  BadgePackage,
  BadgeTimer,
  LandingContainer,
  StoreContainer,
} from './styles'

export function Home() {
  return (
    <>
      <LandingContainer>
        {/* Página Inicial */}
        <img
          src={HeroImage}
          alt="Imagem de Café no copo"
          title="Coffe Delivery"
        />

        <section>
          <div className="description">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>

            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </div>

          <div className="items">
            <BadgeCart>
              <ShoppingCart size={32} weight="fill" />
              Compra simples e segura
            </BadgeCart>

            <BadgePackage>
              <Package size={32} weight="fill" />
              Embalagem mantém o café intacto
            </BadgePackage>

            <BadgeTimer>
              <Timer size={32} weight="fill" />
              Entrega rápida e rastreada
            </BadgeTimer>

            <BadgeCoffee>
              <Coffee size={32} weight="fill" />O café chega fresquinho até você
            </BadgeCoffee>
          </div>
        </section>
      </LandingContainer>

      {/* Lista dos produtos */}
      <StoreContainer>
        <h2>Nossos cafés</h2>

        <ul className="product-list">
          {coffeesList.map((coffee) => (
            <ProductItem key={coffee.id} product={coffee} />
          ))}
        </ul>
      </StoreContainer>
    </>
  )
}
