import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
// Styles //
import { InputContainer } from './styles'

interface InputDefaultProps extends InputHTMLAttributes<HTMLInputElement> {
  hasOptionalLabel?: boolean
  gridArea?: string
  registerName?: string | undefined
}

export function InputDefault({
  hasOptionalLabel = false,
  gridArea = '',
  registerName = undefined,
  ...rest
}: InputDefaultProps) {
  const { register } = useFormContext()

  return (
    <InputContainer id={`${gridArea && gridArea}`}>
      {registerName ? (
        <input {...register(registerName)} {...rest} />
      ) : (
        <input {...rest} />
      )}
      {hasOptionalLabel && (
        <span>
          <i>Opcional</i>
        </span>
      )}
    </InputContainer>
  )
}
