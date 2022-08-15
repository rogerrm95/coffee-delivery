// Icons //
import { Minus, Plus } from 'phosphor-react'
import { InputHTMLAttributes } from 'react'
// Styles //
import { InputCountContainer } from './styles'

interface InputCountProps extends InputHTMLAttributes<HTMLInputElement> {
  onAddOneProductUnity?: () => void
  onRemoveProductUnity?: () => void
}

export function InputCount({
  onRemoveProductUnity,
  onAddOneProductUnity,
  ...rest
}: InputCountProps) {
  return (
    <InputCountContainer>
      <button onClick={onRemoveProductUnity}>
        <Minus size={14} weight="bold" />
      </button>

      <input type="number" {...rest} />

      <button onClick={onAddOneProductUnity}>
        <Plus size={14} weight="bold" />
      </button>
    </InputCountContainer>
  )
}
