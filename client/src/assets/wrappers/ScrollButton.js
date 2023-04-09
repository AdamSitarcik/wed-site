import styled from 'styled-components';

const Wrapper = styled.aside`
    .scroll-container {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 75px;
    }

    .chevron {
        position: absolute;
        bottom: 50px;
        width: 40px;
        height: 3px;
        opacity: 0;
        transform: scale(0.3);
        animation: move-chevron 6s ease-out infinite;
    }

    @media (max-width: calc(650px + 15vw)) {
        .scroll-container {
            width: 10vw;
        }

        .chevron {
            width: 10vw;
        }
    }

    .chevron:first-child {
        animation: move-chevron 6s ease-out 2s infinite;
    }

    .chevron:nth-child(2) {
        animation: move-chevron 6s ease-out 4s infinite;
    }

    .chevron:before,
    .chevron:after {
        content: '';
        position: absolute;
        top: 0;
        height: 100%;
        width: 50%;
        background: #2c3e50;
    }

    .chevron:before {
        left: 0;
        transform: skewY(30deg);
    }

    .chevron:after {
        right: 0;
        width: 50%;
        transform: skewY(-30deg);
    }

    @keyframes move-chevron {
        25% {
            opacity: 1;
        }

        33.3% {
            opacity: 1;
            transform: translateY(100%);
        }

        66.6% {
            opacity: 1;
            transform: translateY(500%);
        }

        100% {
            opacity: 0;
            transform: translateY(1000%) scale(0.3);
        }
    }
`;

export default Wrapper;
