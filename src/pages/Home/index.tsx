import { useEffect, useState } from 'react'
import { coffeesList } from '../../utils/coffeeList'
// Images //
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import HeroImage from '../../assets/hero-image.png'
// Styles //
import {
  BadgeCart,
  BadgeCoffee,
  BadgePackage,
  BadgeTimer,
  LandingContainer,
  StoreContainer,
} from './styles'
import { ProductItem } from '../../components/ProductItem'

interface CoffeeType {
  id: number
  name: string
  description: string
  price: number
  priceFormatted: string
  tags: string[]
  image: string
  isAvaliable?: boolean
}

export function Home() {
  const [coffees, setCoffees] = useState<CoffeeType[]>([])

  useEffect(() => {
    const formattedCoffeeList = coffeesList.map((coffee) => {
      return {
        ...coffee,
        priceFormatted: coffee.price
          .toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })
          .replace('R$', ''),
      }
    })

    setCoffees(formattedCoffeeList)
  }, [])
  return (
    <>
      {/* Página Inicial */}
      <LandingContainer>
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

        <ul>
          {coffees.map((coffee) => (
            <ProductItem key={coffee.id} product={coffee} />
          ))}
        </ul>
      </StoreContainer>
    </>
  )
}
