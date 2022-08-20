import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
// Hooks //
import { useCart } from '../../hooks/useCart'
// Components //
import { InputDefault } from '../../components/Inputs/InputDefault/indext'
import { ProductsSelected } from './components/ProductsSelected'
// Styles //
import {
  CartStorage,
  Container,
  UserInfo,
  FormAddress,
  HeaderFormAddress,
  HeaderPayment,
  PaymentMethodButtons,
} from './styles'
import { useEffect, useState } from 'react'
import { formatToBRCashString } from '../../utils/formatCashString'

export function Checkout() {
  const { cart } = useCart()

  const [sumTotalOfItens, setSumTotalOfItens] = useState(0)

  useEffect(() => {
    const total = cart.reduce((total, item) => {
      return total + item.product.price * item.count
    }, 0)

    setSumTotalOfItens(total)
  }, [cart])

  const custOfDelivery = 3.5
  const custOfDeliveryFormattedToBR = formatToBRCashString(custOfDelivery)

  const sumTotalOfItensFormatted = formatToBRCashString(sumTotalOfItens)
  const priceFinal = sumTotalOfItens + custOfDelivery
  const priceFinalFormatted = formatToBRCashString(priceFinal)

  return (
    <Container>
      {/* Dados do cliente */}
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

      {/* Lista de produtos no carrinho */}
      <CartStorage>
        <h2>Cafés selecionados</h2>

        <div className="purchase-details">
          {cart.map((item) => (
            <ProductsSelected
              product={item.product}
              countOfProduct={item.count}
              key={item.product.id}
            />
          ))}

          <div>
            <span>Total de itens</span>{' '}
            <span>R$ {sumTotalOfItensFormatted}</span>
            <span>Entrega</span> <span>R$ {custOfDeliveryFormattedToBR}</span>
            <span>
              <strong>Total</strong>
            </span>
            <span>
              <strong>R$ {priceFinalFormatted}</strong>
            </span>
          </div>

          <button>Confirmar pedido</button>
        </div>
      </CartStorage>
    </Container>
  )
}
