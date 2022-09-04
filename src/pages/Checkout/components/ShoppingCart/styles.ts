import styled from 'styled-components'

// Carrinho de compras //
export const Container = styled.div`
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
    .prices {
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
        background: ${(props) =>
          props.theme.title === 'light'
            ? props.theme.colors['yellow-dark']
            : props.theme.colors['yellow-light']};
      }

      &:disabled {
        background: ${(props) => props.theme.colors['brown-400']};
        cursor: not-allowed;
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
