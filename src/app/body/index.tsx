import React from 'react';

import { Container } from './index.style';
import { Pinned } from '../pinned';

function Body(props) {
  return (
    <Container>
      <Pinned />
    </Container>
  );
}

export { Body };
