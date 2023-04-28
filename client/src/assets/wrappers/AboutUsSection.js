import styled from 'styled-components';

export const Wrapper = styled.aside`
    position: static;
    .slider-container {
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: end;
        width: 100vw;
        height: 40vh;
        min-height: 150px;
        z-index: 2;
    }

    .slide-container {
        width: 80vh;
        max-width: 800px;
        height: 100%;
        max-height: 400px;
        position: relative;
    }

    .slide {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;
        background-position: center;
        background-size: cover;
        /* background-size: contain; */
        background-repeat: no-repeat;
        border-radius: 20px;
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

    .timeline-container {
        top: 20%;
        height: 30vh;
        min-height: 250px;
        width: 60vw;
        min-width: 900px;
        position: absolute;
        background-color: var(--background-color-info);
        box-shadow: var(--container-box-shadow);
        border-radius: var(--container-border-radius);
        box-sizing: border-box;
        z-index: 2;
    }

    .timeline-container::before {
        width: 80%;
        left: 10%;
        content: '';
        position: absolute;
        top: 32.5%;
        transform: translate(0, -50%);
        border: 0;
        box-shadow: 0 0 2px 2px var(--blue);
    }

    ul {
        width: 100%;
        height: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }

    .timeline-item {
        width: 20%;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size: 1.7rem;
        gap: 60px;
    }

    .description {
        text-align: center;
        height: 50%;
        padding-top: 10px;
    }

    .date {
        height: 15%;
        text-align: center;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: end;
    }

    .icon {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 32.5%;
        transform: translate(0, -50%);
        font-size: 2rem;
        background-color: var(--blue);
        box-shadow: 0 0 3px 3px var(--blue);
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .fsk-logo {
        width: 70%;
        height: 70%;
    }

    @media (max-width: 992px) {
        .slider-container {
            height: 50vw;
            max-height: 250px;
            min-height: 150px;
            max-width: 500px;
            min-width: 300px;
            width: 100vw;
        }

        .slide-container {
            max-height: 250px;
            min-height: 150px;
            max-width: 500px;
            min-width: 300px;
            width: 100%;
            height: 100%;
        }

        .slide {
            max-height: 250px;
            min-height: 150px;
            max-width: 500px;
            min-width: 300px;
        }

        .prev-arrow,
        .next-arrow {
            font-size: 2rem;
        }

        .timeline-container {
            height: 45vh;
            min-height: 300px;
            margin-top: 15vh;
            top: 0;
            width: 90vw;
            max-width: 700px;
            min-width: 200px;
        }

        .timeline-container::before {
            height: 85%;
            width: 0;
            top: 10%;
            left: 32.5%;
            transform: translate(-50%, 0);
        }

        ul {
            flex-direction: column;
            gap: 10px;
        }

        .timeline-item {
            height: 20%;
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            font-size: 1.5rem;
            padding-right: 0;
            padding-bottom: 0;
        }

        .description {
            text-align: start;
            width: 55%;
            height: fit-content;
        }

        .date {
            width: 20%;
            height: fit-content;
            justify-content: end;
            align-items: center;
        }

        .icon {
            width: 35px;
            height: 35px;
            top: 50%;
            left: 32.5%;
            transform: translate(-50%, -50%);
            font-size: 1.7rem;
        }

        @media (min-height: 800px) {
            .slider-container {
                bottom: 7vh;
            }
        }
    }

    @media (max-width: 500px) {
        .timeline-item {
            font-size: 1.2rem;
        }
    }
`;
