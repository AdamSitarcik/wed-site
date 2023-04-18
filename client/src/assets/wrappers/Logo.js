import styled from 'styled-components';

export const Wrapper = styled.aside`
    .logo-container {
        font-family: var(--allura);
        /* font-size: 3rem; */
        height: 22vw;
        min-height: 80px;
        max-height: 110px;
        width: 22vw;
        min-width: 80px;
        max-width: 110px;
    }

    a {
        display: block;
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
    }

    img {
        height: 100%;
        width: 100%;
        cursor: pointer;
    }
`;
