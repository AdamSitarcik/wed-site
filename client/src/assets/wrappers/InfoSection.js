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

    a {
        color: black;
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
        gap: 15px;
    }

    .item-title {
        width: 20%;
        font-size: 1.5rem;
        text-align: end;
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
            justify-content: space-between;
            gap: 15px;
            width: 100%;
            font-size: 1.5rem;
            padding-bottom: 25px;
        }

        .item-title {
            width: auto;
        }

        .item-description {
            width: auto;
            text-align: center;
        }

        .icon {
            position: relative;
            left: 0;
            transform: none;
            font-size: 1.5rem;
            width: 35px;
            height: 35px;
        }

        .item-title {
            text-align: center;
        }
    }
`;
