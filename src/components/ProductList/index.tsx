import TradicionalExpressCoffee from '../../assets/coffees/traditional-espresso.png'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
// Styles //
import { ListContainer, ProductItem } from './styles'

export function ProductList() {
  return (
    <ListContainer>
      <ProductItem>
        <img src={TradicionalExpressCoffee} alt="café expresso tradicioanal" />

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
    </ListContainer>
  )
}
