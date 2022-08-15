import { Trash } from 'phosphor-react'
// Components //
import { InputCount } from '../../../../components/Inputs/InputCount'
// Styles //
import { Container } from './styles'
import { useCart } from '../../../../hooks/useCart'

export function ProductsSelectedList() {
  const { cart } = useCart()

  return (
    <Container>
      {cart &&
        cart.map((item) => (
          <li key={item.product.id}>
            <div className="info">
              <img src={item.product.image} alt={item.product.name} />

              <div className="details">
                <span>{item.product.name}</span>

                <div className="actions">
                  <InputCount />

                  <button className="remove-button">
                    <Trash size={16} />
                    Remover
                  </button>
                </div>
              </div>
            </div>

            <div className="cost">R$ 19,00</div>
          </li>
        ))}
    </Container>
  )
}
