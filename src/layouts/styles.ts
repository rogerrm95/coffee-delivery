import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme.colors['brown-100']};

  display: flex;
  flex-direction: column;
  max-width: 1152px;
  margin: auto;
  padding: 0 1rem;
`
