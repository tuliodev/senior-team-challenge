import styled from "styled-components";

export const Container = styled.form`
    background: whitesmoke;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 70%;


    .react-modal-close {
        width: 20%;
        padding: 0 1.5rem;
        height: 4rem;
        background: red;
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.9);
            cursor: pointer;
        }
    }

    h2 {
        color: black;
        font-size: 1.5rem;
        margin-bottom: 2rem;
        background: whitesmoke;
    }
    input {
        width: 50%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        background: #e7e9ee;
        border: 1px solid #d7d7d7;
        font-weight: 400;
        font-size: 1rem;
        &::placeholder {
            color: whitesmoke;
        }
        & + input {
            margin-top: 1rem;
        }
    }
    button[type="submit"] {
            width: 50%;
            padding: 0 1.5rem;
            height: 4rem;
            background: green;
            color: #FFF;
            border-radius: 0.25rem;
            border: 0;
            font-size: 1rem;
            margin-top: 1.5rem;
            font-weight: 600;
            transition: filter 0.2s;
            &:hover {
                filter: brightness(0.9);
                cursor: pointer;
            }
        }
`;