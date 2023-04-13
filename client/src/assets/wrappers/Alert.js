import styled from 'styled-components';

const Wrapper = styled.aside`
    .alert {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50vw;
        border-color: transparent;
        border-radius: 15px;
        font-size: 2rem;
        padding: 10px 10px;
    }

    .alert-danger {
        background-color: var(--red-light);
        color: var(--red-dark);
        box-shadow: 0 0 15px 5px var(--red-dark);
    }

    .alert-success {
        background-color: var(--green-light);
        color: var(--green-dark);
        box-shadow: 0 0 15px 5px var(--green-dark);
    }

    @media (max-width: 992px) {
        .alert{
            width: 80vw;
        }
    }
`;

export default Wrapper;
