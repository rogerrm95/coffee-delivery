import { Trash } from 'phosphor-react'
import { coffeesList } from '../../../../utils/coffeeList' // Temporário //
// Components //
import { InputCount } from '../../../../components/Inputs/InputCount'
// Styles //
import { Container } from './styles'

export function ProductsSelectedList() {
  return (
    <Container>
      <li>
        <div className="info">
          <img src={coffeesList[0].image} alt={coffeesList[0].name} />

          <div className="details">
            <span>{coffeesList[0].name}</span>

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
    </Container>
  )
}
