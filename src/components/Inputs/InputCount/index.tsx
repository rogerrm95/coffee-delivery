import { InputHTMLAttributes } from 'react'
// Icons //
import { Minus, Plus } from 'phosphor-react'
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
      <button type="button" onClick={onRemoveProductUnity}>
        <Minus size={14} weight="bold" />
      </button>

      <input type="number" {...rest} />

      <button type="button" onClick={onAddOneProductUnity}>
        <Plus size={14} weight="bold" />
      </button>
    </InputCountContainer>
  )
}
