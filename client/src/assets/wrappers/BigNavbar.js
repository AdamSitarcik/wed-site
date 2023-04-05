import styled from 'styled-components';

const Wrapper = styled.aside`
    display: none;
    @media (min-width: 992px) {
        display: block;

        .navbar-container {
            width: 100vw;
            background-color: var(--background-color-light);
            padding-top: 10px;
            padding-bottom: 10px;
            height: var(--navbar-height);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: black;
        }

        .content {
            width: 100%;
            max-width: 1200px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .nav-links {
            padding: 0 2vw;
            width: 100%;
            display: flex;
            justify-content: space-between;
        }

        .App-logo {
            height: 8vh;
            pointer-events: none;
            margin: 0;
        }
    }
`;

export default Wrapper;
