import styled from "styled-components";

const Wrapper = styled.aside`
    display: none;
    @media (min-width: 992px) {
        display: block;

        .navbar-container {
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
            padding: 0 2vw;
            width: 100%;
            display: flex;
            justify-content: space-between;
        }

        .logo-container {
            position: fixed;
            width: 5vw;
            transition: 1s ease-in-out all;
        }
    }
`;

export default Wrapper;
