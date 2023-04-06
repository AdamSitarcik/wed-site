import styled from "styled-components";

const Wrapper = styled.aside`
    @media (min-width: 992px) {
        display: none;
    }

    .toggle-btn {
        width: 100px;
        height: 100px;
        position: fixed;
        top: 2vh;
        left: 2vw;
        background: none;
        border: none;
        cursor: pointer;
        font-size: calc(15px + 3vw);
    }

    .navbar-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        opacity: 0;
        position: fixed;
        background-color: rgb(0, 0, 0, 0.7);
        z-index: -1;
        transition: var(--transition);
        inset: 0;
    }

    .navbar-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: relative;
        width: 45vw;
        min-width: 175px;
        max-width: 300px;
        height: 90vw;
        min-height: 350px;
        max-height: 600px;
        background-color: var(--background-color-light-non-transparent);
        border-radius: 25px;
        box-shadow: 0 0 5px 5px var(--background-color-light-non-transparent);
    }

    .nav-links {
        height: 75%;
        display: flex;
        flex-direction: column;
        position: relative;
        justify-content: space-around;
        padding-top: 10px;
        margin-left: 10px;
        align-items: center;
        font-size: 150%;
        color: black;
    }

    .show-navbar {
        z-index: 99;
        opacity: 1;
    }

    .close-btn {
        font-size: 20px;
        border: none;
        background: none;
        position: absolute;
        right: 5px;
        top: 5px;
        cursor: pointer;
    }

    .App-logo {
        z-index: 10;
        height: 20%;
        min-height: 32px;
        top: 10px;
        position: relative;
        pointer-events: none;
        margin: 0;
    }

    .App-logo img {
        height: 100%;
    }
`;

export default Wrapper;
