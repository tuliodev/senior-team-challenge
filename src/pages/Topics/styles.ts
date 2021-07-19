import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-top: 1rem;
    flex-wrap: wrap;

    img {
        width: 100%;
        max-width: 150px;
        object-fit: fill;
    }
    .topics-div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
        background: #F0F2F5;
        
    }
    .div-sub-element {
        display: flex;
        flex-direction: column;
    }
    .topic-title {
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
    }

    .topic-description {
        font-family: 'Poppins', sans-serif;
        font-size: 10px;
        width: 10rem;
    }

    .master-title-element {
        font-family: 'Poppins', sans-serif;
        font-size: 30px;
    }

    .main-div-element {
        display: flex;
        flex-direction: column;
        margin-left: 2rem;
    }

    button {
        cursor: pointer;
        font-size: 1rem;
        color: #F0F2F5;
        background: #E28413;
        border: 0;
        padding: 0.2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }

    }

    @media(max-width: 720px) {
        .main-div-element {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 5rem;
    }
    }
`
