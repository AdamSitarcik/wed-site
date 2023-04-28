import styled from 'styled-components';

export const Wrapper = styled.aside`
    .container {
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: var(--container-box-shadow);
        background-color: var(--background-color-info);
        border-radius: var(--container-border-radius);
        min-height: 350px;
    }

    .contacts-container {
        padding: 40px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 50px;
    }

    .contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 1.5rem;
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
        .container {
            justify-content: space-between;
            gap: 20px;
        }

        .contacts-container {
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: fit-content;
            padding: 0;
            gap: 0;
        }

        .left,
        .right {
            align-items: center;
        }

        .divider {
            display: block;
            width: 80%;
            background-color: var(--background-color-dark-non-transparent);
            box-shadow: 0 0 1.5px 1.5px
                var(--background-color-dark-non-transparent);
        }

        .contact {
            font-size: 1.3rem;
        }
    }
`;
