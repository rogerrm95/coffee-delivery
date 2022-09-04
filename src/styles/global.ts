import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
    }

    input::placeholder {
        color: ${(props) => props.theme.colors['brown-600']}
    }

    input {
        color: ${(props) => props.theme.colors['brown-600']}
    }

    body {
        background: ${(props) => props.theme.colors['brown-100']};
        color: ${(props) => props.theme.colors['brown-700']}
    }

    button {
        border: 0;
        background: transparent;
    }

    a {
        text-decoration: none;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors['brown-600']};
    }

    ul {
        list-style: none ;
    }

    // Remove o icone (seta) do input tipo númerico //
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
`
