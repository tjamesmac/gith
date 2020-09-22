import styled from 'styled-components';

const Spacer = styled.div<{
    padding?: string;
    margin?: string;
    children: React.ReactNode;
}>`
    padding: ${props => (props.padding ? props.padding : 0)};
    margin: ${props => (props.margin ? props.margin : 0)};
`;

export { Spacer };
