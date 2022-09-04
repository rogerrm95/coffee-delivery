import styled from 'styled-components'

// LANDING PAGE //
export const LandingContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4rem;

  img {
    width: 380px;
    height: 276px;
  }

  // Desktop //
  @media (min-width: 992px) {
    & {
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      height: 544px;
    }

    img {
      width: 476px;
      height: 360px;
      animation: fadeIn 2s;
    }
  }

  section {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4.125rem;

    .description {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h1 {
        font: 800 3rem 'Baloo 2', monospace;
        line-height: 130%;
        text-align: center;
        color: ${(props) => props.theme.colors['brown-900']};
      }

      span {
        font-size: 1.25rem;
        line-height: 130%;
        text-align: center;
      }
    }

    .items {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    // Desktop //
    @media (min-width: 992px) {
      .description {
        h1,
        span {
          text-align: left;
        }
      }

      .items {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        flex-wrap: wrap;
      }
    }

    // Animações //
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`
// Badges //
const BadgeBase = styled.span`
  display: flex;
  align-items: center;
  line-height: 130%;

  svg {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 0.5rem;
    padding: 0.5rem;
    border-radius: 50%;

    color: ${(props) => props.theme.colors.white};
  }
`
export const BadgeCart = styled(BadgeBase)`
  svg {
    background-color: ${(props) =>
      props.theme.title === 'light'
        ? props.theme.colors['yellow-dark']
        : props.theme.colors['yellow-light']};
  }
`
export const BadgePackage = styled(BadgeBase)`
  svg {
    background-color: ${(props) =>
      props.theme.title === 'light'
        ? props.theme.colors['brown-700']
        : props.theme.colors['brown-300']};
  }
`
export const BadgeTimer = styled(BadgeBase)`
  svg {
    background-color: ${(props) => props.theme.colors.yellow};
  }
`
export const BadgeCoffee = styled(BadgeBase)`
  svg {
    background-color: ${(props) => props.theme.colors.purple};
  }
`
// PRODUCTS //
export const StoreContainer = styled.section`
  height: 100vh;
  width: 100%;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  row-gap: 3.25rem;

  h2 {
    font-family: 'Baloo 2', monospace;
    font-weight: 800;
    font-size: 2rem;
  }

  ul {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.5rem 2rem;

    padding-bottom: 2rem;
  }

  // Desktop //
  @media (min-width: 992px) {
    ul {
      justify-content: flex-start;
    }
  }
`
