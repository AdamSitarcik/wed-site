import styled from 'styled-components';

const Wrapper = styled.aside`
    .alert {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 5vh;
        left: 50%;
        transform: translate(-50%, 0);
        width: 50vw;
        height: 50px;
        border-color: transparent;
        border-radius: 15px;
        font-size: 2rem;
    }

    .alert-danger {
        background-color: var(--red-light);
        color: var(--red-dark);
    }

    .alert-success {
        background-color: var(--green-light);
        color: var(--green-dark);
    }
`;

export default Wrapper;
