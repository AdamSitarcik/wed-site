import styled from 'styled-components';

export const Wrapper = styled.aside`
    display: none;
    @media (min-width: 992px) {
        display: block;

        .navbar-container {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, 0);
            width: 100vw;
            background-color: var(--background-color-light);
            margin: 0;
            height: var(--navbar-height);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: black;
        }

        .content {
            height: 100%;
            width: 100%;
            padding: 0 3vw;
            max-width: 1200px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .nav-links {
            opacity: 0;
            padding: 0 2vw;
            width: 100%;
            display: flex;
            justify-content: space-between;
            transition: opacity 0.5s ease-in-out;
        }

        .show-navlinks {
            opacity: 1;
        }

        .logo-container {
            position: fixed;
            top: 3vh;
            left: 3vw;
            opacity: 0;
            width: 3vw;
            transition: opacity 0.5s ease-in-out;
            z-index: -1;
        }

        .show-logo {
            position: fixed;
            opacity: 1;
            z-index: 99;
        }
    }
`;
