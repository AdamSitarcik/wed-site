import styled from 'styled-components';

const Wrapper = styled.aside`
    .slider-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--background-color-dark);
        /* box-shadow: 0 0 10px 10px #333333ce; */
        width: 100vw;
        height: calc(var(--slide-heigth) + 5vh);
        max-height: calc(var(--slide-max-heigth) + 0vh);
        min-height: calc(var(--slide-min-heigth) + 0vh);
    }

    .slide-container {
        width: var(--slide-width);
        max-width: var(--slide-max-width);
        min-width: var(--slide-min-heigth);
        height: var(--slide-heigth);
        min-height: var(--slide-min-heigth);
        max-height: var(--slide-max-heigth);
        position: relative;
        border-radius: 20px;
    }

    .slide {
        box-shadow: 0 0 20px 20px var(--background-color-dark) inset;
        width: 100%;
        min-width: var(--slide-min-heigth);
        height: 100%;
        min-height: var(--slide-min-width);
        background-position: center;
        background-size: cover;
        animation: zoomin 5s 1;
    }

    .prev-arrow-container,
    .next-arrow-container {
        position: absolute;
        height: 100%;
        width: 3.5vw;
        cursor: pointer;
        z-index: 1;
    }

    .prev-arrow-container {
        left: 0;
    }

    .next-arrow-container {
        top: 0;
        right: 0;
    }

    .prev-arrow-container:hover,
    .next-arrow-container:hover {
        background-color: rgb(255, 255, 255, 0.3);
    }

    .prev-arrow-container:hover {
        /* border-radius: 20px 0 0 20px; */
    }

    .next-arrow-container:hover {
        /* border-radius: 0 20px 20px 0; */
    }

    .prev-arrow,
    .next-arrow {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        font-size: 5vw;
        color: white;
    }

    @media (max-width: 650px) {
        .prev-arrow,
        .next-arrow {
            font-size: 30px;
        }
    }

    .prev-arrow {
        left: 0.8vw;
    }

    .next-arrow {
        right: 1vw;
    }

    @keyframes zoomin {
        0% {
            -webkit-transform: scale(1);
        }
        100% {
            -webkit-transform: scale(1.3);
        }
    }
`;

export default Wrapper;
