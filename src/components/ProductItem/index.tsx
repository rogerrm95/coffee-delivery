// Utils //
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
// Styles //
import { ProductItemContainer } from './styles'

export interface Product {
  id: number
  name: string
  description: string
  price: number
  priceFormatted: string
  tags: string[]
  image: string
  isAvaliable?: boolean
}

interface ProductItemProps {
  product: Product
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <ProductItemContainer>
      <img src={product.image} alt={product.name} />

      <div className="badge-features">
        {product.tags.map((tag) => (
          <span key={tag}>{tag.toLocaleUpperCase()}</span>
        ))}
      </div>

      <p className="name">{product.name}</p>

      <span className="description">{product.description}</span>

      <footer>
        <span>
          R$
          <strong>{product.priceFormatted}</strong>
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
    </ProductItemContainer>
  )
}
