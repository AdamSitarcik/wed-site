import styled from 'styled-components';

const Wrapper = styled.aside`
    display: none;
    @media (min-width: 992px) {
        background-color: var(--background-color-light);
        height: var(--navbar-height);
        display: flex;
        position: relative;
        gap: 7vw;
        width: 100%;
        padding-top: 10px;
        justify-content: center;
        align-items: center;
        font-size: calc(10px + 2vmin);
        color: black;

        .App-logo {
            height: 8vh;
            pointer-events: none;
            margin: 0;
        }
    }
`;

export default Wrapper;
