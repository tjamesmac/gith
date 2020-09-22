import styled from 'styled-components';

const Container = styled.div<{ children: React.ReactNode }>`
  display: grid;
  grid-auto-columns: 1fr;
  place-items: center;
  height: 15rem;
`;

export { Container };
