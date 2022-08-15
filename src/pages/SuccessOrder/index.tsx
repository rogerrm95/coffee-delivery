// Images //
import { Timer, MapPin, CurrencyDollar } from 'phosphor-react'
import HeroImage from '../../assets/success-illustration.svg'
// Styles //
import {
  BadgeAddress,
  BadgePayment,
  BadgeTime,
  BorderGradient,
  Container,
} from './styles'

export function SuccessOrder() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
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
                <strong>Cartão de Crédito</strong>
              </p>
            </BadgePayment>
          </div>
        </BorderGradient>
      </section>

      <img src={HeroImage} alt="Motoqueiro com o pedido" />
    </Container>
  )
}
