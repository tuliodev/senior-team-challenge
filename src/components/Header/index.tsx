import { Container, Body } from './styles';

import stLogo from '../../assets/stLogo.png';

export function Header () {
    return (
        <Container>
            <div className="firstElement">
                <a href="/home"> <img src={stLogo} alt="Logo"  /> </a>
                
            </div>
            <div className="secondElement">
                <a href="/topics"> TOPICS </a>
                <a href="/"> STAFF </a>
                <a href="/"> MINECRAFT </a>
            </div>
        </Container>

    )
}