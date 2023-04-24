import styled from 'styled-components';

export const Wrapper = styled.aside`
    .timeline-container {
        top: 5%;
        width: 40vw;
        position: relative;
        background-color: var(--background-color-info);
        box-shadow: var(--container-box-shadow);
        border-radius: var(--container-border-radius);
        box-sizing: border-box;
    }

    .timeline-container::before {
        height: 80%;
        top: 10%;
        content: '';
        position: absolute;
        left: 32.5%;
        transform: translate(-50%, 0);
        border: 0;
        box-shadow: 0 0 2px 2px var(--blue);
    }

    ul {
        height: 100%;
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
    }

    .timeline-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 25px;
        font-size: 1.7rem;
        height: 7vh;
    }

    .icon {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 32.5%;
        transform: translate(-50%, 0);
        font-size: 2rem;
        background-color: var(--blue);
        box-shadow: 0 0 3px 3px var(--blue);
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .item-description {
        text-align: start;
        width: 55%;
    }

    .time {
        width: 20%;
        text-align: end;
    }

    @media (max-width: 992px) {
        .timeline-container {
            margin-top: 15vh;
            height: 70vh;
            width: 90%;
            max-width: 700px;
        }

        .timeline-item {
            width: 100%;
            font-size: 1.5rem;
            padding-bottom: 25px;
        }

        .icon {
            font-size: 2rem;
            width: 40px;
            height: 40px;
        }

        ul{
            gap: 0;
        }
    }
`;
export default Wrapper;
