import styled from 'styled-components';

export const Wrapper = styled.aside`
    .form-container {
        min-height: 40vh;
        width: 50vw;
        max-width: 400px;
        min-width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .form {
        width: 100%;
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

    .other-guests-container {
        width: 100%;
    }

    .input {
        box-sizing: border-box;
        width: 100%;
        margin-top: 5px;
        padding: 5px 5px;
        border-radius: 5px;
        border: 2px;
        border-style: solid;
        background-color: var(--light-grey);
    }

    label {
        text-align: left;
        display: block;
        width: 100%;
        font-size: 1.3rem;
    }

    .form-row {
        width: 100%;
        margin-bottom: 15px;
    }

    .add-guest-btn,
    .delete-guest-btn {
        width: 50%;
        margin-bottom: 10px;
        border: 2px var(--dark-grey);
        border-style: solid;
    }

    .add-guest-btn:hover,
    .delete-guest-btn:hover {
        box-shadow: 0 0 5px 2px var(--dark-grey);
    }

    .submit-btn {
        width: 100%;
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
        .form-container {
            height: 50vh;
            max-width: 100%;
        }
    }
`;
