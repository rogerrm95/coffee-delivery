import styled from 'styled-components'

// Container Principal //
export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 2.5rem 0;

  h2 {
    font: 700 1.125rem 'Baloo 2', monospace;
    margin-bottom: 0.25rem;
  }

  // Desktop //
  @media (min-width: 1120px) {
    & {
      flex-direction: row;
      align-items: flex-start;
    }
  }
`
// Dados do Usuário //
export const UserInfo = styled.section`
  width: 100%;
  max-width: 40rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  .user-address {
    width: 100%;
    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    border-radius: 6px;
    background: ${(props) => props.theme.colors['brown-200']};
  }

  .user-payment {
    width: 100%;
    padding: 2.5rem;
    margin-top: 0.75rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    border-radius: 6px;
    background: ${(props) => props.theme.colors['brown-200']};
  }
`
// Formulário do endereço do cliente //
export const FormAddress = styled.form`
  width: 100%;

  display: grid;
  grid-template-columns: 2fr 1fr 80px;
  grid-template-rows: repeat(6, 1fr);
  gap: 1rem 0.75rem;
  grid-template-areas:
    'cep none none'
    'street street street'
    'numberHouse numberHouse numberHouse'
    'complement complement complement'
    'district district district'
    'city city uf';

  #cep {
    grid-area: cep;
  }

  #street {
    grid-area: street;
  }

  #numberHouse {
    grid-area: numberHouse;
  }

  #complement {
    grid-area: complement;
  }

  #district {
    grid-area: district;
  }

  #city {
    grid-area: city;
  }

  #uf {
    grid-area: uf;
  }

  @media (min-width: 1120px) {
    grid-template-columns: 1fr 2fr 60px;
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      'cep none none'
      'street street street'
      'numberHouse complement complement'
      'district city uf';
  }
`

const HeaderBase = styled.header`
  height: 2.75rem;
  width: 100%;

  display: flex;
  gap: 0.5rem;

  p {
    line-height: 130%;
    color: ${(props) => props.theme.colors['brown-800']};
  }

  span {
    font-size: 0.875rem;
  }
`

export const HeaderFormAddress = styled(HeaderBase)`
  svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }
`

export const HeaderPayment = styled(HeaderBase)`
  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`

export const PaymentMethodButtons = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  button {
    padding: 1rem 0.5rem 1rem 1rem;
    min-width: 178px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 6px;
    background: ${(props) => props.theme.colors['brown-400']};
    color: ${(props) => props.theme.colors['brown-700']};
    font-size: 0.75rem;

    cursor: pointer;
    transition: background-color 0.2s;

    svg {
      margin-right: 0.5rem;
      color: ${(props) => props.theme.colors.purple};
    }

    &:not(.selected):hover {
      background: ${(props) => props.theme.colors['brown-500']};
    }
  }

  .selected {
    border: 1px solid ${(props) => props.theme.colors.purple};
    background: ${(props) => props.theme.colors['purple-light']};
  }

  // Desktop //
  @media (min-width: 1120px) {
    & {
      flex-direction: row;
      align-items: flex-start;
    }

    button {
      justify-content: flex-start;
    }
  }
`

// Carrinho de compras //
export const CartStorage = styled.section`
  width: 100%;
  max-width: 40rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  .purchase-details {
    width: 100%;
    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 6px 44px;
    background: ${(props) => props.theme.colors['brown-200']};

    // Preços //
    > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(3, 1fr);
      gap: 0.75rem;
      justify-content: space-between;

      & span:nth-child(even) {
        text-align: right;
      }

      & span:nth-child(odd) {
        font-size: 0.875rem;
      }

      & span strong {
        font-weight: 700;
        font-size: 1.25rem;
        color: ${(props) => props.theme.colors['brown-800']};
      }
    }

    // Confirmar pedido //
    > button {
      margin-top: 1.5rem;
      padding: 0.75rem 0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;

      font-weight: 700;
      font-size: 0.75rem;
      line-height: 160%;

      background: ${(props) => props.theme.colors.yellow};
      color: ${(props) => props.theme.colors.white};
      text-transform: uppercase;
      cursor: pointer;

      transition: background-color 0.3s;

      &:hover {
        background: ${(props) => props.theme.colors['yellow-dark']};
      }
    }

    // Desktop //
    @media (min-width: 1120px) {
      & {
        max-width: 28rem;
      }
    }
  }
`
