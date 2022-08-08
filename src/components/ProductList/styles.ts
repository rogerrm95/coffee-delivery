import styled from 'styled-components'

export const ListContainer = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
`

// Item - Component //
export const ProductItem = styled.li`
  width: 256px;
  height: 310px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;

  border-radius: 6px 36px;
  background: ${(props) => props.theme.colors['brown-200']};

  img {
    height: 120px;
    width: 120px;
    margin-top: -2.5rem;
  }

  .badge-features {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem;

    margin-top: 0.75rem;

    span {
      background: ${(props) => props.theme.colors['yellow-light']};
      color: ${(props) => props.theme.colors['yellow-dark']};

      padding: 0.25rem 0.5rem;
      font-weight: 700;
      font-size: 0.625rem;
      border-radius: 8px;
    }
  }

  .name {
    margin-top: 1rem;

    font: 700 1.25rem 'Baloo 2', monospace;
    text-align: center;
    color: ${(props) => props.theme.colors['brown-800']};
  }

  .description {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;

    color: ${(props) => props.theme.colors['brown-600']};
  }

  footer {
    margin-top: auto;

    display: flex;
    justify-content: space-between;
    gap: 1.5rem;

    span {
      font-size: 0.75rem;
      color: ${(props) => props.theme.colors['brown-800']};
    }

    strong {
      font: 800 1.5rem 'Baloo 2', monospace;
      margin-left: 0.25rem;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .input-count {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 0.5rem;
    gap: 0.25rem;

    background: ${(props) => props.theme.colors['brown-300']};
    border-radius: 8px;

    button {
      cursor: pointer;
      color: ${(props) => props.theme.colors.purple};
    }

    input {
      width: 1.25rem;
      background: transparent;
      border: none;

      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 1rem;
    }
  }

  .buy-button {
    background: ${(props) => props.theme.colors['purple-dark']};
    color: ${(props) => props.theme.colors.white};

    padding: 0.5rem;
    border-radius: 6px;

    display: flex;
    place-items: center;

    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background: ${(props) => props.theme.colors.purple};
    }
  }
`