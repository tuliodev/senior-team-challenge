import styled from 'styled-components';

export const Container = styled.header`
    background: #E36D00;
    
    display: flex;
    flex-wrap: wrap;

    img {
        width: 100%;
        max-width: 100px;
        padding: 15px;
    }

    a {
        text-decoration: none;
        color: #ffffff;
        font-size: 2rem;
        padding-right: 30px;
    }

    .secondElement {
        display: flex;
        align-items: center;  
    }

    @media (max-width: 768px) {
        a {
            font-size: 18px;
            font-family: 'Poppins', sans-serif;

        }

        .secondElement {
                display: flex;
                align-items: center;
                flex-direction: column;    
                flex-wrap: wrap;
                justify-content: space-around;
                margin-top: 5px;
                margin-left: 50px;
        }
    }
`
export const Body = styled.div``
