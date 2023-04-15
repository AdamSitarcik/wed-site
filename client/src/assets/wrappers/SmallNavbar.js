import styled from "styled-components";

const Wrapper = styled.aside`
    @media (min-width: 992px) {
        display: none;
    }

    .toggle-btn {

        width: 75px;
        height: 75px;
        position: fixed;
        top: 0;
        left: 0;
        background: none;
        border: none;
        cursor: pointer;
        font-size: clamp(25px,100vw, 35px);
        z-index: 99;

    }

    .navbar-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        opacity: 0;
        z-index: -1;
        position: fixed;
        background-color: rgb(0, 0, 0, 0.7);
        z-index: -1;
        transition: var(--transition);
        inset: 0;
    }

    .navbar-content {
        z-index: 99;
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

    .show-navbar {
        z-index: 50;
        opacity: 1;
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
`;

export default Wrapper;
