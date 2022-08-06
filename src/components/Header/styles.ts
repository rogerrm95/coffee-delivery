import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 104px;
  width: 100%;
  max-width: 1100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  margin: auto;

  position: sticky;
  top: 0;

  img {
    width: 80px;
    height: 40px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const LocationBadge = styled.span`
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 0.875rem;
  color: ${(props) => props.theme.colors['purple-dark']};
  background: ${(props) => props.theme.colors['purple-light']};

  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`

export const CartButton = styled.button`
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme.colors['yellow-dark']};
  background: ${(props) => props.theme.colors['yellow-light']};

  cursor: pointer;
  transition: opacity 0.3s;

  &::after {
    content: '3';
    width: 20px;
    height: 20px;
    border-radius: 50%;

    position: absolute;
    top: 24px;
    right: 8px;
    background: ${(props) => props.theme.colors['yellow-dark']};
    color: ${(props) => props.theme.colors.white};

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: bold;
    font-size: 0.75rem;
  }

  &:hover {
    opacity: 0.7;
  }
`
