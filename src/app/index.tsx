import React from 'react';

import { Aside } from './aside';
import { Body } from './body';
import { Footer } from './footer';

import { Header } from './header';
import { Navigation } from './navigation';

import { light, dark } from './index.theme';
import { ThemeProvider, GlobalStyle, Container } from './index.style';

function Main(props) {
  return (
    <Container>
      <Aside />
      <Body />
    </Container>
  );
}

export function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Header />
        <Navigation />
        <Main theme={light} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
