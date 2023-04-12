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
`;

export default Wrapper;
