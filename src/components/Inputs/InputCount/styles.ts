import styled from 'styled-components'

export const InputCountContainer = styled.div`
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
`
