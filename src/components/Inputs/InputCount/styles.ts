import styled from 'styled-components'

export const InputCountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 4px;

  width: 72px;
  height: 32px;

  background: ${(props) => props.theme.colors['brown-300']};
  border-radius: 8px;

  button {
    cursor: pointer;
    color: ${(props) =>
      props.theme.title === 'light'
        ? props.theme.colors.purple
        : props.theme.colors['purple-dark']};
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
`
