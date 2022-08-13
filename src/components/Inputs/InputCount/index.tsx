// Icons //
import { Minus, Plus } from 'phosphor-react'
// Styles //
import { InputCountContainer } from './styles'

export function InputCount() {
  return (
    <InputCountContainer>
      <button>
        <Minus size={14} weight="bold" />
      </button>
      <input type="number" id="amount" value={1} />
      <button>
        <Plus size={14} weight="bold" />
      </button>
    </InputCountContainer>
  )
}
