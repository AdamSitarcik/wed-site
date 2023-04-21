import styled from 'styled-components';

export const Wrapper = styled.aside`
    .slider-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--background-color-dark);
        width: 100vw;
        height: 70vh;
        /* max-height: calc(var(--slide-max-heigth) + 0vh); */
        /* min-height: calc(var(--slide-min-heigth) + 0vh); */
    }

    .slide-container {
        width: 70%;
        /* max-width: var(--slide-max-width); */
        /* min-width: var(--slide-min-heigth); */
        /* height: var(--slide-heigth);
        min-height: var(--slide-min-heigth);
        max-height: var(--slide-max-heigth); */
        height: 95%;
        position: relative;
        border-radius: 20px;
    }

    .slide {
        position: absolute;
        width: 100%;
        /* min-width: var(--slide-min-heigth); */
        /* max-width: var(--slide-max-width); */
        height: 100%;
        /* min-height: var(--slide-min-width); */
        /* max-height: var(--slide-max-heigth); */
        background-position: center;
        /* background-size: cover; */
        z-index: 2;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .secondary {
        z-index: 1;
    }

    .prev-arrow-container,
    .next-arrow-container {
        position: absolute;
        height: 100%;
        width: 3.5vw;
        cursor: pointer;
        z-index: 3;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .prev-arrow-container {
        left: 0;
    }

    .next-arrow-container {
        top: 0;
        right: 0;
    }

    .prev-arrow-container:hover,
    .next-arrow-container:hover,
    .prev-arrow-container:active,
    .next-arrow-container:active {
        background-color: rgb(255, 255, 255, 0.3);
    }

    .prev-arrow-container:active,
    .next-arrow-container:active {
        background-color: rgb(255, 255, 255, 0.3);

    }

    .prev-arrow,
    .next-arrow {
        color: var(--light-grey-transparent);
        /* position: absolute; */
        /* top: 50%; */
        /* transform: translate(0, -50%); */
        font-size: 5vw;
    }

    .prev-arrow {
        left: 0.8vw;
    }

    .next-arrow {
        right: 1vw;
    }

    .slide-exit {
        opacity: 1;
    }

    .slide-exit-active {
        opacity: 0;
        transition: opacity 1000ms;
        transition-delay: 100ms;
    }

    .frame {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: auto;
        z-index: 4;
        background-size: 100% 100%;
        
    }

    img {
        width: 100%;
    }

    @media (max-width: 650px) {
        .prev-arrow,
        .next-arrow {
            font-size: 30px;
        }
    }

    @media (max-width: 992px) {
        .slide-container {
            width: 100%;
        }

        .prev-arrow-container,
        .next-arrow-container {
            width: 7vw;
        }
    }
`;
