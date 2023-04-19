import styled from 'styled-components';

export const Wrapper = styled.aside`
    .scroll-container {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
    }

    .chevron {
        position: absolute;
        bottom: 35px;
        width: 30px;
        height: 3px;
        opacity: 0;
        transform: scale(0.3);
        animation: move-chevron 6s ease-out infinite;
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

    @media (max-width: 992px) {
        .scroll-container {
            width: 45px;
        }

        .chevron {
            width: 30px;
            bottom: 35px;
        }
    }

    @media (max-height: 800px) {
        .scroll-container {
            height: 30px;
        }
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
