import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    img {
        width: 40%;
        object-fit: fill;
    }
    p {
        font-family: 'Poppins', sans-serif; 
    }

    @media(max-width: 720px) {
       img {
        width: 100%;
        object-fit: fill;
    }
    }

`;

