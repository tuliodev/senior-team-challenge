import { Header } from "../../components/Header";

import homeImg from '../../assets/homeImg.svg';

import { Container } from './styles';

export default function Home () {
    return (
        <>
        <Header />
        <Container>
            <div>
            <p><b>Welcome to Junior Team Forums</b></p>
            <p>
                Lorem Ipsum has been the <br />
                industry's standard dummy text ever<br />
                since the 1500s, when an unknown printer<br />
                took a galley of type and scrambled it to make<br />
                a type specimen book. It has survived not only f
            </p>
            </div>

            <div>
                <img src={homeImg} alt="Imagem home" />
            </div>

            
        </Container>
        </>
    )
}