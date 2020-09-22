import React from 'react';

import { Nav } from './index.style';

import { Link } from '../components/link';
import { Spacer } from '../components/space';

type NavigationProps = {};

function Navigation(props: NavigationProps) {
  return (
    <Nav>
      <Spacer margin="0 1rem 1rem 0" padding="1rem">
        <Link href="/">Overview</Link>
      </Spacer>
      <Spacer margin="0 1rem 1rem 0" padding="1rem">
        <Link href="/">Repositories</Link>
      </Spacer>
      <Spacer margin="0 1rem 1rem 0" padding="1rem">
        <Link href="/">Projects</Link>
      </Spacer>
      <Spacer margin="0 1rem 0" padding="1rem">
        <Link href="/">Packages</Link>
      </Spacer>
    </Nav>
  );
}

export { Navigation };
