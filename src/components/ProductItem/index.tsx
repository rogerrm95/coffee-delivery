import { ShoppingCart } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { formatToBRCashString } from '../../utils/formatCashString'
// Components //
import { InputCount } from '../Inputs/InputCount'
// Styles //
import { ProductItemContainer } from './styles'

export interface Product {
  id: number
  name: string
  description: string
  price: number
  tags: string[]
  image: string
  isAvaliable?: boolean
}

interface ProductItemProps {
  product: Product
}

export function ProductItem({ product }: ProductItemProps) {
  const [count, setCount] = useState(1)
  const [priceFormatted, setPriceFormatted] = useState<number | string>(
    product.price,
  )

  // Multiplica o valor conforme a quantidade aumenta //
  useEffect(() => {
    const newPrice = formatToBRCashString(product.price * count)
    setPriceFormatted(newPrice)
  }, [count])

  const { addProductToShopCart } = useCart()

  // Adiciona uma unidade do produto //
  function handleAddOneProductUnity() {
    const newCount = count + 1

    if (newCount >= 100) {
      return
    }

    setCount(newCount)
  }

  // Remove uma unidade do produto //
  function handleRemoveOneProductUnity() {
    const newCount = count - 1

    if (newCount <= 0) {
      return
    }
    setCount(newCount)
  }

  function hanldeAddToShoppingCart() {
    const productItem = {
      id: product.id,
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
    }

    addProductToShopCart({ ...productItem }, count)
    setCount(1)
  }

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
          <strong>
            {count === 0 ? formatToBRCashString(product.price) : priceFormatted}
          </strong>
        </span>

        <div className="actions">
          <InputCount
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            onAddOneProductUnity={handleAddOneProductUnity}
            onRemoveProductUnity={handleRemoveOneProductUnity}
            min={1}
            max={99}
          />

          <button className="buy-button" onClick={hanldeAddToShoppingCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </footer>
    </ProductItemContainer>
  )
}
