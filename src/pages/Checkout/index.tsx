import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { InputDefault } from '../../components/Inputs/InputDefault/indext'
// Styles //
import {
  CartStorage,
  CheckoutContainer,
  UserInfo,
  FormAddress,
  HeaderFormAddress,
  HeaderPayment,
  PaymentMethodButtons,
  CoffeSeleted,
} from './styles'

import { coffeesList } from '../../utils/coffeeList'

export function Checkout() {
  return (
    <CheckoutContainer>
      <UserInfo>
        <h2>Complete seu Pedido</h2>
        <div className="user-address">
          <HeaderFormAddress>
            <MapPinLine size={22} weight="regular" />
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </HeaderFormAddress>

          <FormAddress>
            <InputDefault type="number" placeholder="CEP" gridArea="cep" />
            <InputDefault type="text" placeholder="Rua" gridArea="street" />
            <InputDefault
              type="number"
              placeholder="Número"
              gridArea="numberHouse"
            />
            <InputDefault
              type="text"
              placeholder="Complemento"
              gridArea="complement"
              hasOptionalLabel
            />
            <InputDefault
              type="text"
              placeholder="Bairro"
              gridArea="district"
            />
            <InputDefault type="text" placeholder="Cidade" gridArea="city" />
            <InputDefault type="text" placeholder="UF" gridArea="uf" />
          </FormAddress>
        </div>

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
            <button className="selected">
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </button>

            <button>
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </button>

            <button>
              <Money size={16} />
              DINHEIRO
            </button>
          </PaymentMethodButtons>
        </div>
      </UserInfo>

      <CartStorage>
        <h2>Cafés selecionados</h2>

        <div className="purchase-details">
          <ul>
            <CoffeSeleted>...</CoffeSeleted>
          </ul>

          <div>
            <span>Total de itens</span> <span>R$ 29,70</span>
            <span>Entrega</span> <span>R$ 3,50</span>
            <span>
              <strong>Total</strong>
            </span>
            <span>
              <strong>R$ 33,20</strong>
            </span>
          </div>

          <button>Confirmar pedido</button>
        </div>
      </CartStorage>
    </CheckoutContainer>
  )
}
