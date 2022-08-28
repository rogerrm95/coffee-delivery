import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  margin-bottom: 1.5rem;

  img {
    object-fit: contain;
    width: 4rem;
    opacity: 0.5;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors['brown-500']};
  }

  span {
    font-size: 0.85rem;
    color: ${(props) => props.theme.colors['brown-500']};
  }
`
