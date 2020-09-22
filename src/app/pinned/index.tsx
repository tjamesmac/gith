import React from 'react';

import { BoxGroup, Box } from './index.style';
import { Spacer } from '../components/space';

type PinProps = {
  info: {
    title: string;
    sub: string;
    content: string;
  };
};

function Pin(props: PinProps) {
  const { title, sub, content } = props.info;
  return (
    <div>
      <h3>{title}</h3>
      <span>{sub}</span>
      <p>{content}</p>
    </div>
  );
}
const boxInfo = [
  { title: 'Box 1', sub: '', content: '' },
  { title: 'Box 2', sub: '', content: '' },
  { title: 'Box 3', sub: '', content: '' },
  { title: 'Box 4', sub: '', content: '' },
  { title: 'Box 5', sub: '', content: '' },
  { title: 'Box 6', sub: '', content: '' },
];

function Pinned() {
  return (
    <>
      Pinned
      <BoxGroup>
        {boxInfo.map(box => (
          <Box>
            <Spacer padding="2rem">
              <Pin info={box} />
            </Spacer>
          </Box>
        ))}
      </BoxGroup>
    </>
  );
}

export { Pinned };
