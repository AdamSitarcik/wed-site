import styled from 'styled-components';

export const Wrapper = styled.aside`
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: var(--container-box-shadow);
        background-color: var(--background-color-info);
        border-radius: var(--container-border-radius);
    }

    .contacts-container {
        padding: 40px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }

    .contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 1.5rem;
        max-height: 50vh;
    }

    .right {
        align-items: end;
    }

    .left {
        align-items: start;
    }

    .adress-container {
        font-size: 1.2rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    .divider {
        display: none;
    }

    .react-icon {
        color: black;
        font-size: 1rem;
    }

    @media (max-width: 992px) {
        .contacts-container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .left,
        .right {
            align-items: center;
        }

        .divider {
            display: block;
            height: 1px;
            width: 80%;
            background-color: var(--background-color-dark-non-transparent);
            border-radius: 15px;
            box-shadow: 0 0 1px 1px var(--background-color-dark-non-transparent);
        }
    }
`;
