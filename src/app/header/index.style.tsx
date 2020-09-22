import styled, { css } from 'styled-components';

const centeredFlex = css`
    display: flex;
    align-items: center;
`;

const HeadNav = styled.header`
    ${centeredFlex}
    padding: 1.5rem;
    background-color: ${props => props.theme.colors.grey70};
`;

const HeadNavSection = styled.div`
    ${centeredFlex}
    justify-content: space-between;
    flex: 1 1 auto;
`;

export { HeadNav, HeadNavSection };
