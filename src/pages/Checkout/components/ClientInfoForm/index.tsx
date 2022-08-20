// Types //
import { PaymentMethod } from '../..'
// Icons //
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
// Components //
import { InputDefault } from '../../../../components/Inputs/InputDefault/indext'
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
          <InputDefault registerName="cep" placeholder="CEP" gridArea="cep" />
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
