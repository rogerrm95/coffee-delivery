import { ShoppingCart } from 'phosphor-react'
// Components //
import { InputCount } from '../Inputs/InputCount'
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
          <InputCount />

          <button className="buy-button">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </footer>
    </ProductItemContainer>
  )
}
