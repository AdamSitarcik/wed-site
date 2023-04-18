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

    /* .background-circle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(var(--bckg-img-max-width) * 1.1);
        height: calc(var(--bckg-img-max-width) * 1.1);
        background-color: var(--background-color-info);
        border-radius: 50%;
    } */

    .info-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        background-color: none;
        justify-content: space-between;
        border-radius: var(--container-border-radius);
        transition: all 0.3s ease-in-out;
        height: 65vh;
        padding: 20px;
        width: 650px;
    }

    .show-frame {
        box-shadow: 0 0 10px 10px var(--background-color-dark);
        background-color: var(--background-color-info);
    }

    .name-container {
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width: 992px) {
        .background-circle {
            width: clamp(
                calc(var(--bckg-img-min-width) * 1.1),
                91vw,
                calc(var(--bckg-img-max-width) * 1.1)
            );
            height: clamp(
                calc(var(--bckg-img-min-width) * 1.1),
                91vw,
                calc(var(--bckg-img-max-width) * 1.1)
            );
        }

        .info-container {
            width: clamp(
                var(--bckg-img-min-width),
                82vw,
                var(--bckg-img-max-width)
            );
        }

        h1 {
            font-size: clamp(3rem, 10vw, 5rem);
        }

        h2 {
            font-size: clamp(2.45rem, 6vw, 3.5rem);
        }
    }
`;
