import styled from 'styled-components';

export const Wrapper = styled.aside`
    h1 {
        font-size: 5rem;
    }
    h2 {
        font-size: 3.5rem;
    }

    h1,
    h2 {
        font-family: var(--allura);
        margin: 0;
    }

    .info-container {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: var(--background-color-info);
        box-shadow: 0 0 20px 20px var(--background-color-info);
        border-radius: 10px;
        height: 60vh;
        padding: 15px;
    }

    .name-container {
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width: 992px) {
        h1 {
            font-size: clamp(3rem, 10vw, 5rem);
        }

        h2 {
            font-size: clamp(2.45rem, 6vw, 3.5rem);
        }
    }
`;
