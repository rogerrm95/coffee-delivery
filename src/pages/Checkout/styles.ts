import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100%;
`

export const Form = styled.form`
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
