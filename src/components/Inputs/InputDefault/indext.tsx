import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputContainer } from './styles'

interface InputDefaultProps extends InputHTMLAttributes<HTMLInputElement> {
  hasOptionalLabel?: boolean
  gridArea?: string
  registerName?: string
}

export function InputDefault({
  hasOptionalLabel = false,
  gridArea = '',
  registerName = '',
  ...rest
}: InputDefaultProps) {
  const { register } = useFormContext()

  return (
    <InputContainer id={`${gridArea && gridArea}`}>
      <input {...register(registerName)} {...rest} />
      {hasOptionalLabel && (
        <span>
          <i>Opcional</i>
        </span>
      )}
    </InputContainer>
  )
}
