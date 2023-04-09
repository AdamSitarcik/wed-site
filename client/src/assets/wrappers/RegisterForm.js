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
        width: 100%;
        margin-top: 10px;
        padding: 2px 4px;
        border-radius: 5px;
        border: 2px;
        border-style: solid;
        border-color: var(--dark-grey);
        background-color: var(--light-grey);
    }

    .form-row label {
        text-align: start;
        display: block;
        width: 100%;
        font-size: 1.3rem;
    }

    .form-row {
        width: 100%;
    }

    .input:focus {
        box-shadow: 0 0 5px 2px var(--dark-grey);
    }
    
    .input:active {
        box-shadow: 0 0 5px 2px var(--dark-grey);
    }

    .submit-btn {
        padding: 6px;
        background-color: var(--light-grey);
        border: 2px;
        border-style: solid;
        border-color: var(--dark-grey);
    }

    .submit-btn:hover {
        box-shadow: 0 0 5px 2px var(--dark-grey);
    }
`;

export default Wrapper;
