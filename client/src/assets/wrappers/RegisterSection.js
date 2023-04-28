import styled from 'styled-components';

export const Wrapper = styled.aside`
    .section-container {
        justify-content: start;
    }

    .form-container {
        margin-top: 25vh;
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

    .input-row {
        margin-top: 5px;
        height: 100%;
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .add-guest-btn {
        width: 50%;
        margin-bottom: 15px;
        border: 2px var(--dark-grey);
        border-style: solid;
    }

    .delete-guest-btn {
        width: 40px;
        height: 100%;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;
        color: gray;
    }

    .add-guest-btn:hover {
        box-shadow: 0 0 5px 2px var(--dark-grey);
    }

    .add-guest-btn:disabled {
        cursor: default;
        box-shadow: none;
    }

    .delete-guest-btn:hover {
        background-color: var(--red-light);
        color: black;
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

    /* .header {
        font-family: var(--allura);
        width: 80vw;
        height: 10%;
        position: absolute;
        left: 50%;
        top: 5%;
        transform: translate(-50%, 0);
        margin: 0;
    } */

    .no-form-container {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        width: 70%;
        max-width: 500px;
        font-size: 1.5rem;
        background-color: var(--background-color-info);
        padding: 25px 0;
        border-radius: var(--container-border-radius);
        border: none;
        box-shadow: var(--container-box-shadow);
    }

    @media (max-width: 992px) {
        .form-container {
            min-height: 50vh;
            margin-top: 20vh;
            max-width: 100%;
        }

        /* .header h1 {
            font-size: 2.5rem;
        }

        .header h3 {
            font-size: 1.6rem;
        } */
    }
`;
