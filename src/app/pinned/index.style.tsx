import styled from 'styled-components';

const BoxGroup = styled.div<{ children: React.ReactNode }>`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
`;

const Box = styled.div<{ children: React.ReactNode }>`
    border-radius: ${props => props.theme.border.radius};
    border: ${props => props.theme.border.style};
    height: 10rem;
    width: 100%;
`;

export { BoxGroup, Box };
