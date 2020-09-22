import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { light, dark } from './index.theme';

type ThemeType = typeof light;

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    body {
        background-color: ${props => props.theme.colors.white};
        /* background-color: rgb(55, 116, 166); */
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`;

const Container = styled.div`
  /* display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; */
  display: grid;
  grid-template-columns: minmax(150px, 25%) 1fr;
  grid-gap: 2rem;
  padding: 0 1.5rem;
`;

export { ThemeProvider, GlobalStyle, Container };
