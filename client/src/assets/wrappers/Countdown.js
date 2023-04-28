import styled from 'styled-components';

export const Wrapper = styled.aside`
    .countdown-container {
        position: absolute;
        bottom: 9%;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 1;
        width: 70vw;
        max-width: 400px;
        min-width: 250px;
        height: 70px;
        display: flex;
        justify-content: space-between;
    }

    .countdown-item {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
    }

    .countdown-value {
        font-size: 2rem;
    }
    .countdown-unit {
        font-size: 1.4rem;
    }

    @media (max-width: 992px) {
        .countdown-container {
            width: 70vw;
            max-width: 400px;
        }

        .countdown-value {
            font-size: 1.7rem;
        }
        .countdown-unit {
            font-size: 1.2rem;
        }
    }
`;
