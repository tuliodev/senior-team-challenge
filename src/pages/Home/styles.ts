import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9rem;

    flex-wrap: wrap;

    margin-top: 100px;

    p {
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
    }

    img {
        width: 30rem;
    }

    @media(max-width: 720px) {
        p {
            font-family: 'Poppins', sans-serif;
            font-size: 20px;
        }
    }
`

 