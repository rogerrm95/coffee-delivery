import { useEffect, useState } from 'react'
import { Trash } from 'phosphor-react'
// Utils //
import { formatToBRCashString } from '../../../../utils/formatCashString'
// Hook //
import { useCart } from '../../../../hooks/useCart'
// Components //
import { InputCount } from '../../../../components/Inputs/InputCount'
// Styles //
import { Container } from './styles'

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

  // Calcula o valor total daquele item (preço unitário X Quantidade) //
  useEffect(() => {
    const total = formatToBRCashString(product.price * count)
    setTotalPrice(total)
  }, [product.price, count])

  // Função responsável por adicionar +1 unidade do produto //
  function handleAddOneProductUnity() {
    const newCount = count + 1

    if (newCount >= 100) {
      return
    }

    setCount(newCount)
    updateCounOfProduct(product.id, newCount)
  }

  // Função responsável por remover 1 unidade do produto //
  function handleRemoveOneProductUnity() {
    const newCount = count - 1

    if (newCount <= 0) {
      return
    }
    setCount(newCount)
    updateCounOfProduct(product.id, newCount)
  }

  // Função responsável por atualizar o valor do input //
  function handleChangeProductUnity(countOfProduct: number) {
    const newCount = countOfProduct

    if (newCount <= 0 || newCount >= 100) {
      return
    }

    setCount(newCount)
    updateCounOfProduct(product.id, newCount)
  }

  // Função responsável por excluir o item da lista //
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
              type="button"
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
