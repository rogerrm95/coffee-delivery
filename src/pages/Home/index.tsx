// Images //
import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from 'phosphor-react'
import HeroImage from '../../assets/hero-image.png'
import TradicionalExpressCoffee from '../../assets/coffees/traditional-espresso.png'
// Components //
import { Header } from '../../components/Header'
// Styles //
import {
  BadgeCart,
  BadgeCoffee,
  BadgePackage,
  BadgeTimer,
  HomeContainer,
  LandingContainer,
  ProductItem,
  StoreContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />

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

      <StoreContainer>
        <h2>Nossos cafés</h2>

        <ul>
          <ProductItem>
            <img
              src={TradicionalExpressCoffee}
              alt="café expresso tradicioanal"
            />

            <div className="badge-features">
              <span>TRADICIONAL</span>
              <span>GELADO</span>
            </div>

            <p className="name">Expresso Tradicional</p>

            <span className="description">
              O tradicional café feito com água quente e grãos moídos
            </span>

            <footer>
              <span>
                R$
                <strong>9,90</strong>
              </span>

              <div className="actions">
                <div className="input-count">
                  <button>
                    <Minus size={14} weight="bold" />
                  </button>
                  <input type="number" id="amount" value={1} />
                  <button>
                    <Plus size={14} weight="bold" />
                  </button>
                </div>

                <button className="buy-button">
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </div>
            </footer>
          </ProductItem>
        </ul>
      </StoreContainer>
    </HomeContainer>
  )
}
