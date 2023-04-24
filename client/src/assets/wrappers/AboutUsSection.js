import styled from 'styled-components';

export const Wrapper = styled.aside`
    .slider-container {
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: end;
        width: 100vw;
        height: 70vh;
    }

    .slide-container {
        width: 40vw;
        height: 30vw;
        min-width: 600px;
        min-height: 450px;
        position: relative;
    }

    .slide {
        position: absolute;
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        z-index: 2;
        /* background-size: contain; */
        background-repeat: no-repeat;
    }

    .secondary {
        z-index: 1;
    }

    .prev-arrow-container,
    .next-arrow-container {
        position: absolute;
        width: 5%;
        cursor: pointer;
        z-index: 3;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 50%;
        transform: translate(0, -50%);
        height: 50%;
    }

    .prev-arrow-container {
        left: 0;
    }

    .next-arrow-container {
        right: 0;
    }

    .prev-arrow-container:hover,
    .next-arrow-container:hover,
    .prev-arrow-container:active,
    .next-arrow-container:active {
        background-color: rgba(255, 255, 255, 0.3);
        box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.3);
    }

    .prev-arrow,
    .next-arrow {
        color: var(--light-grey-transparent);
        font-size: 3rem;
    }

    .slide-exit {
        opacity: 1;
    }

    .slide-exit-active {
        opacity: 0;
        transition: opacity 1000ms;
        transition-delay: 100ms;
    }

    @media (max-width: 992px) {
        .slider-container {
            height: 40vh;
        }

        .slide-container {
            width: 100%;
            min-width: 100%;
            min-height: 40vh;
        }

        .prev-arrow,
        .next-arrow {
            font-size: 2rem;
        }
    }
`;
