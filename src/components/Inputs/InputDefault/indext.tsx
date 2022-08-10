import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface InputDefaultProps extends InputHTMLAttributes<HTMLInputElement> {
  hasOptionalLabel?: boolean
  gridArea?: string
}

export function InputDefault({
  hasOptionalLabel = false,
  gridArea,
  ...rest
}: InputDefaultProps) {
  return (
    <InputContainer id={`${gridArea && gridArea}`}>
      <input {...rest} />
      {hasOptionalLabel && (
        <span>
          <i>Opcional</i>
        </span>
      )}
    </InputContainer>
  )
}
