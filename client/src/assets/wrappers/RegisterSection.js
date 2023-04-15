import styled from 'styled-components';

const Wrapper = styled.aside`
    .form-container {
        height: 100%;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .form {
        height: 40vh;
        width: 50vw;
        max-width: 400px;
        min-width: 300px;
        background-color: var(--background-color-info);
        padding: 25px 0;
        border-radius: var(--container-border-radius);
        border: none;
        box-shadow: var(--container-box-shadow);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .input {
        box-sizing: border-box;
        width: 100%;
        margin-top: 8px;
        padding: 5px 5px;
        border-radius: 5px;
        border: 2px;
        border-style: solid;
        background-color: var(--light-grey);
    }

    .form-row label {
        text-align: left;
        display: block;
        width: 100%;
        font-size: 1.3rem;
    }

    .form-row {
        width: 100%;
    }

    .submit-btn {
        padding: 6px;
        background-color: var(--light-grey);
        border: 2px;
        border-style: solid;
    }

    .input,
    .submit-btn {
        border-color: var(--blue);
    }

    .submit-btn:hover,
    .input:hover,
    .input:focus {
        box-shadow: 0 0 5px 2px var(--blue);
    }

    .input:focus {
        outline: none;
    }

    @media (max-width: 992px) {
        .form {
            height: 50vh;
            max-width: 100%;
        }
    }
`;

export default Wrapper;
