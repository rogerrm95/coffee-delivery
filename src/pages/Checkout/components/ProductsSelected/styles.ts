import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  position: relative;

  .info {
    display: flex;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .remove-button {
      padding: 0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      border-radius: 6px;

      background: ${(props) => props.theme.colors['brown-300']};

      color: ${(props) =>
        props.theme.title === 'light'
          ? props.theme.colors.purple
          : props.theme.colors['purple-dark']};

      text-transform: uppercase;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background: ${(props) => props.theme.colors['brown-400']};
      }
    }

    .cost {
      text-align: right;
      font-weight: 700;
      color: ${(props) => props.theme.colors['brown-700']};
    }

    &::after {
      content: '';
      width: 100%;
      height: 1px;
      background: ${(props) => props.theme.colors['brown-400']};

      position: absolute;
      bottom: 0;
      margin: -1.5rem 0;
    }
  }
`
