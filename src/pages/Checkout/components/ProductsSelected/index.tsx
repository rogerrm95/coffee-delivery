import { useEffect, useState } from 'react'
import { Trash } from 'phosphor-react'
import { formatToBRCashString } from '../../../../utils/formatCashString'
// Components //
import { InputCount } from '../../../../components/Inputs/InputCount'
// Styles //
import { Container } from './styles'
import { useCart } from '../../../../hooks/useCart'

type Product = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

interface ProductsSelectedProps {
  product: Product
  countOfProduct: number
}

export function ProductsSelected({
  product,
  countOfProduct,
}: ProductsSelectedProps) {
  const { updateCounOfProduct, deleteProductAtTheCart } = useCart()

  const [totalPrice, setTotalPrice] = useState<string | number>(0)
  const [count, setCount] = useState(() => {
    if (countOfProduct) {
      return countOfProduct
    } else {
      return 0
    }
  })

  useEffect(() => {
    const total = formatToBRCashString(product.price * count)
    setTotalPrice(total)
  }, [product.price, count])

  // Adiciona uma unidade do produto //
  function handleAddOneProductUnity() {
    const newCount = count + 1

    if (newCount >= 100) {
      return
    }

    setCount(newCount)
    updateCounOfProduct(product.id, newCount)
  }

  // Remove uma unidade do produto //
  function handleRemoveOneProductUnity() {
    const newCount = count - 1

    if (newCount <= 0) {
      return
    }
    setCount(newCount)
    updateCounOfProduct(product.id, newCount)
  }

  // Atualiza o valor do input //
  function handleChangeProductUnity(countOfProduct: number) {
    const newCount = countOfProduct

    if (newCount <= 0 || newCount >= 100) {
      return
    }

    setCount(newCount)
    updateCounOfProduct(product.id, newCount)
  }

  // Exclui o item da lista //
  function handleDeleteProductAtTheCart(productID: number) {
    deleteProductAtTheCart(productID)
  }

  return (
    <Container key={product.id}>
      <div className="info">
        <img src={product.image} alt={product.name} />

        <div className="details">
          <span>{product.name}</span>

          <div className="actions">
            <InputCount
              value={count}
              onChange={(e) => handleChangeProductUnity(Number(e.target.value))}
              min={1}
              max={99}
              onAddOneProductUnity={handleAddOneProductUnity}
              onRemoveProductUnity={handleRemoveOneProductUnity}
            />

            <button
              className="remove-button"
              onClick={() => handleDeleteProductAtTheCart(product.id)}
            >
              <Trash size={16} />
              Remover
            </button>
          </div>
        </div>
      </div>

      <div className="cost">R$ {totalPrice}</div>
    </Container>
  )
}
