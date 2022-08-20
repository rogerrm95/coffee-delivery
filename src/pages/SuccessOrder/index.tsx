import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// Utils //
import { paymentMethodsList } from '../../utils/paymentMethodsList'
// Types //
import { CheckoutFormValues, PaymentMethod } from '../Checkout'
// Images //
import HeroImage from '../../assets/success-illustration.svg'
import { Timer, MapPin, CurrencyDollar } from 'phosphor-react'
// Styles //
import {
  BadgeAddress,
  BadgePayment,
  BadgeTime,
  BorderGradient,
  Container,
} from './styles'

interface SuccessPageLocationState {
  address: CheckoutFormValues
  paymentMethod: PaymentMethod
}

export function SuccessOrder() {
  const { state } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [state])

  if (!state) {
    return null
  }

  const { address, paymentMethod } = state as SuccessPageLocationState

  return (
    <Container>
      <section>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <BorderGradient>
          <div className="success-message">
            <BadgeAddress>
              <MapPin size={32} weight="bold" />
              <p>
                Entrega em{' '}
                <strong>{`${address.street}, ${address.numberHouse} `}</strong>
                <br />
                {`${address.district} - ${address.city}, ${address.uf}`}
              </p>
            </BadgeAddress>

            <BadgeTime>
              <Timer size={32} weight="bold" />
              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            </BadgeTime>

            <BadgePayment>
              <CurrencyDollar size={32} weight="bold" />
              <p>
                Pagamento na entrega <br />
                <strong>{paymentMethodsList[paymentMethod]}</strong>
              </p>
            </BadgePayment>
          </div>
        </BorderGradient>
      </section>

      <img src={HeroImage} alt="Entregador na moto com o pedido" />
    </Container>
  )
}
