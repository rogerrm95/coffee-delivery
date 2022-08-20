import { useEffect, useState } from 'react'
// Hooks //
import { useCart } from '../../../../hooks/useCart'
// Utils //
import { formatToBRCashString } from '../../../../utils/formatCashString'
// Components //
import { ProductsSelected } from '../ProductsSelected'
// Styles //
import { Container } from './styles'

export function ShoppingCart() {
  const { cart } = useCart()

  const [sumTotalOfItens, setSumTotalOfItens] = useState(0)

  useEffect(() => {
    const total = cart.reduce((total, item) => {
      return total + item.product.price * item.count
    }, 0)

    setSumTotalOfItens(total)
  }, [cart])

  // Variáveis auxiliares //
  const custOfDelivery = 3.5
  const custOfDeliveryFormattedToBR = formatToBRCashString(custOfDelivery)

  const sumTotalOfItensFormatted = formatToBRCashString(sumTotalOfItens)
  const priceFinal = sumTotalOfItens + custOfDelivery
  const priceFinalFormatted = formatToBRCashString(priceFinal)
  return (
    <>
      {/* Lista de produtos no carrinho */}
      <Container>
        <h2>Cafés selecionados</h2>

        <div className="purchase-details">
          {cart.map((item) => (
            <ProductsSelected
              product={item.product}
              countOfProduct={item.count}
              key={item.product.id}
            />
          ))}

          <div>
            <span>Total de itens</span>{' '}
            <span>R$ {sumTotalOfItensFormatted}</span>
            <span>Entrega</span> <span>R$ {custOfDeliveryFormattedToBR}</span>
            <span>
              <strong>Total</strong>
            </span>
            <span>
              <strong>R$ {priceFinalFormatted}</strong>
            </span>
          </div>

          <button type="submit">Confirmar pedido</button>
        </div>
      </Container>
    </>
  )
}
