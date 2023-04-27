import styled from 'styled-components';

export const Wrapper = styled.aside`
    .info-container {
        margin-top: 20vh;
        margin-bottom: 5vh;
        width: 70vw;
        position: relative;
        background-color: var(--background-color-info);
        box-shadow: var(--container-box-shadow);
        border-radius: var(--container-border-radius);
        box-sizing: border-box;
    }

    ul {
        height: 100%;
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 30px;
        align-items: center;
    }

    .info-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    .item-title {
        width: 20%;
        font-size: 1.5rem;
        text-align: end;
        font-weight: bold;
    }

    .item-description {
        display: flex;
        flex-direction: column;
        gap: 20px;
        text-align: start;
        font-size: 1.5rem;
        width: 55%;
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

    .react-icon {
        font-size: 1.2rem;
    }

    @media (max-width: 992px) {
        .info-container {
            margin-top: 15vh;
            min-height: 70vh;
            width: 90%;
            max-width: 700px;
        }

        .info-item {
            flex-direction: column;
            font-size: 1.5rem;
            padding-bottom: 25px;
            gap: 10px;
        }

        .item-title {
            width: auto;
            font-size: 1.7rem;
        }

        .item-description {
            width: auto;
            text-align: center;
        }

        .icon {
            position: relative;
            left: 0;
            transform: none;
            font-size: 2rem;
            width: 40px;
            height: 40px;
        }

        .item-title {
            text-align: center;
        }
    }
`;
