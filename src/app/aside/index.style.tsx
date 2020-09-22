import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 25%;
`;

const Highlights = styled.div<{
  children: React.ReactNode;
}>`
  border: ${props => props.theme.border.style};
  border-left: none;
  border-right: none;
`;

export { Container, Highlights };
