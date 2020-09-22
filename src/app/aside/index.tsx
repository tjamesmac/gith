import React from 'react';

import { Container, Highlights } from './index.style';

function Aside() {
  return (
    <Container>
      <h1>Thomas McAuliffe</h1>
      <h3>tjamesmac</h3>
      <button>Edit profile</button>
      <span>2 followers</span>
      <span> 2 following </span>
      <span>0 stars</span>
      <p>Office for National Statistics</p>
      <Highlights>
        <h4>Highlights</h4>
        <p>Arctic Code Vault Contributor</p>
      </Highlights>
      <h4>Organizations</h4>
      <p>Office for National Statistics</p>
    </Container>
  );
}

export { Aside };
