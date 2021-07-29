import { Header } from "../../components/Header";

import minecraftImg from '../../assets/minecraftImg.jpeg';

import { Container} from './styles';

export default function Minecraft () {
    return (
        <>
        <Header />
        <Container>
            <p>About Minecraft</p>
            <img src={minecraftImg} alt="minecraft" />
            <p>Lorem Ipsum has been the 
                industry's standard dummy text ever
                since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make<br />
                a type specimen book. It has survived not only f</p>
        </Container>
        </>
    )
}