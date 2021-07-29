import { Header } from "../../components/Header";

import applyStaff from "../../assets/applyStaff.png";

import { Container} from './styles';

export default function Staff () {
    return (
        <>
        <Header />
        <Container>
            <p>About Staff</p>
            <p>Lorem Ipsum has been the 
                industry's standard dummy text ever
                since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make<br />
                a type specimen book. It has survived not only f
                </p>
                <img src={applyStaff} alt="applyImg"/>
                <p>Lorem Ipsum has been the 
                industry's standard dummy text ever
                since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make<br />
                a type specimen book. It has survived not only f
                </p>
        </Container>
        </>
    )
}