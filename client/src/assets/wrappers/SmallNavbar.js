import styled from 'styled-components';

const Wrapper = styled.aside`
    height: 0;
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 7vw;
    width: 100%;
    padding-top: 10px;
    margin-left: 10px;
    align-items: flex-start;
    font-size: calc(10px + 2vmin);
    color: black;

    .App-logo {
            height: 8vh;
            pointer-events: none;
            margin: 0;
    }

    @media (min-width: 992px) {
        display: none;
    }
`;

export default Wrapper;
