import { useFormContext } from 'react-hook-form'
import { useState } from 'react'
import { toast } from 'react-toastify'
// Icons //
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
// Types //
import { PaymentMethod } from '../..'
// Components //
import { InputDefault } from '../../../../components/Inputs/InputDefault'
// Styles //
import {
  FormAddress,
  HeaderFormAddress,
  HeaderPayment,
  PaymentMethodButtons,
  UserInfo,
} from './styles'

interface ClientInfoFormProps {
  paymentMethod: PaymentMethod | undefined
  onSelectedPaymentMethod: (method: PaymentMethod) => void
}

export function ClientInfoForm({
  paymentMethod,
  onSelectedPaymentMethod,
}: ClientInfoFormProps) {
  const { setValue } = useFormContext()
  const [zipcode, setZipcode] = useState<string>('')

  // Função responsável por recerber um CEP e realizar umas busca em uma API Externa //
  // API de CEP's - ViaCEP //
  async function handleLoadAddressAboutTheZipcode() {
    const zipcodeFormatted = zipcode.replace(/[^\d]+/g, '')

    const address = await fetch(
      `http://viacep.com.br/ws/${zipcodeFormatted}/json/`,
    )
      .then((res) => res.json())
      .catch((_) => {
        if (zipcodeFormatted.length >= 6) {
          toast.error('Endereço não encontrado!')
        }
      })

    if (address) {
      setValue('street', address.logradouro)
      setValue('district', address.bairro)
      setValue('complement', address.complemento)
      setValue('city', address.localidade)
      setValue('uf', address.uf)
    }
  }

  return (
    <UserInfo>
      <h2>Complete seu Pedido</h2>

      {/* Endereço do cliente */}
      <div className="user-address">
        <HeaderFormAddress>
          <MapPinLine size={22} weight="regular" />
          <div>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </HeaderFormAddress>

        <FormAddress>
          {/* Controlled Input */}
          <InputDefault
            placeholder="CEP"
            gridArea="cep"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            onBlur={() => handleLoadAddressAboutTheZipcode()}
          />

          <InputDefault
            registerName="street"
            placeholder="Rua"
            gridArea="street"
          />
          <InputDefault
            registerName="numberHouse"
            placeholder="Número"
            gridArea="numberHouse"
          />

          <InputDefault
            registerName="complement"
            placeholder="Complemento"
            gridArea="complement"
            hasOptionalLabel
          />

          <InputDefault
            registerName="district"
            placeholder="Bairro"
            gridArea="district"
          />
          <InputDefault
            registerName="city"
            placeholder="Cidade"
            gridArea="city"
          />
          <InputDefault
            registerName="uf"
            placeholder="UF"
            gridArea="uf"
            min={2}
            max={2}
          />
        </FormAddress>
      </div>

      {/* Método de pagamento */}
      <div className="user-payment">
        <HeaderPayment>
          <CurrencyDollar size={22} weight="regular" />

          <div>
            <p>Pagamento</p>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </HeaderPayment>

        <PaymentMethodButtons>
          <button
            type="button"
            className={paymentMethod === 'credit' ? 'selected' : ''}
            onClick={() => onSelectedPaymentMethod('credit')}
          >
            <CreditCard size={16} />
            CARTÃO DE CRÉDITO
          </button>

          <button
            type="button"
            className={paymentMethod === 'debit' ? 'selected' : ''}
            onClick={() => onSelectedPaymentMethod('debit')}
          >
            <Bank size={16} />
            CARTÃO DE DÉBITO
          </button>

          <button
            type="button"
            className={paymentMethod === 'cash' ? 'selected' : ''}
            onClick={() => onSelectedPaymentMethod('cash')}
          >
            <Money size={16} />
            DINHEIRO
          </button>
        </PaymentMethodButtons>
      </div>
    </UserInfo>
  )
}
