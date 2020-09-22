import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;
  border: ${props => props.theme.border.style};
  border-top: none;
`;

export { Nav };
