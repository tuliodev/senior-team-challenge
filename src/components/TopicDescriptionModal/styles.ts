import styled from "styled-components";

export const Container = styled.form`

    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    
    div {
        display: flex;
        align-items: center;
        flex-direction: column;
        background: whitesmoke;
        width: 400px;
        margin-top: 10%;
        position: relative;
    }

    .comments-desc {
        font-family: 'Poppins', sans-serif;
        font-size: 10px;
        width: 10rem;
    }

    .main-image {
        object-fit: fill;
        height: 40%;
        width: 40%;
    }

    .comments-div {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        border: 2px solid #E9DDD4;
        width: 70%;
    }

    .comment-image { 
        object-fit: fill;
        height: 20%;
        width: 20%;
    }

    .react-modal-close {
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

            position: absolute;
            right: 0;
            top: -19px;
            bottom: 0;
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
        width: 80%;
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

