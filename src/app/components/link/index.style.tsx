import styled from 'styled-components';

const Link = styled.a<{ light?: boolean }>`
  color: white;
  color: ${props =>
    props.light ? props.theme.colors.white : props.theme.colors.black};
  text-decoration: none;
`;

export { Link };
