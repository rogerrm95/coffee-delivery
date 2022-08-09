import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface InputDefaultProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
}

export function InputDefault({
  isOptional = false,
  ...rest
}: InputDefaultProps) {
  return (
    <InputContainer>
      <input {...rest} />
      {isOptional && (
        <span>
          <i>Opcional</i>
        </span>
      )}
    </InputContainer>
  )
}
