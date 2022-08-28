// Image //
import EmptyShoppingCartImage from '../../../../assets/empty-shopping-cart.png'
// Styles //
import { Container } from './styles'

export function NoItens() {
  return (
    <Container>
      <img
        src={EmptyShoppingCartImage}
        alt="Carrinho vazio"
        title="Carrinho vazio"
      />
      <p>Oh não, O carrinho está vazio</p>
      <span>Selecione ao menos um produto de nossa loja</span>
    </Container>
  )
}
