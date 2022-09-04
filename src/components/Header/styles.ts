import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 104px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  position: sticky;
  top: 0;

  background: ${(props) => props.theme.colors['brown-100']};
  z-index: 9999;

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
    color: ${(props) =>
      props.theme.title === 'light'
        ? props.theme.colors.purple
        : props.theme.colors.white};
  }

  @media (max-width: 600px) {
    span {
      display: none;
    }
  }
`
export const Button = styled.button`
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`

export const HomeButton = styled(Button)`
  color: ${(props) => props.theme.colors['purple-dark']};
  background: ${(props) => props.theme.colors['purple-light']};
`
interface CartButtonProps {
  numberToItensAtShopCart: number
}

export const CartButton = styled(Button)<CartButtonProps>`
  color: ${(props) => props.theme.colors['yellow-dark']};
  background: ${(props) => props.theme.colors['yellow-light']};

  &::after {
    content: '${(props) => props.numberToItensAtShopCart}';
    width: 20px;
    height: 20px;
    border-radius: 50%;

    display: ${(props) =>
      props.numberToItensAtShopCart === 0 ? 'none' : 'flex'};

    position: absolute;
    top: 24px;
    right: -8px;
    background: ${(props) =>
      props.theme.title === 'light'
        ? props.theme.colors['yellow-dark']
        : props.theme.colors.white};

    color: ${(props) =>
      props.theme.title === 'light'
        ? props.theme.colors.white
        : props.theme.colors['purple-light']};

    justify-content: center;
    align-items: center;

    font-weight: bold;
    font-size: 0.75rem;
  }
`
