import styled from 'styled-components';

export const Wrapper = styled.aside`
    .info-container {
        height: 60vh;
        min-height: 250px;
        width: 650px;
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        background-color: none;
        justify-content: space-between;
        border-radius: var(--container-border-radius);
        transition: all 0.3s ease-in-out;
        padding: 20px;
    }

    .show-frame {
        box-shadow: 0 0 10px 10px var(--background-color-dark);
        background-color: var(--background-color-info);
    }

    h3 span {
        display: block;
    }

    .name-container {
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width: 992px) {
        .info-container {
            max-height: 500px;
            width: clamp(
                var(--bckg-img-min-width),
                82vw,
                var(--bckg-img-max-width)
            );
        }

        .name-container {
            box-sizing: border-box;
            padding: 20px 0;
        }
    }

    @media (max-height: 650px) {
        .name-container {
            flex-direction: row;
            justify-content: center;
            gap: 25px;
        }

        /* h1 {
            font-size: 7vh;
        }

        h2 {
            font-size: 5vh;
        }

        h3 {
            font-size: 4vh;
        } */

        .info-container {
            height: 50vh;
        }
    }
`;
