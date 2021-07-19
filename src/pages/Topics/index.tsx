import { Header } from "../../components/Header";

import stLogo from '../../assets/stLogo.png';

import { useState } from 'react';

import { Container} from './styles';

import { CreateTopicModal } from "../../components/CreateTopicModal";

export default function Topics () {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal () {
        setModalIsOpen(true);
    }

    function closeModal () {
        setModalIsOpen(false);
    }

    const topics = [
        {
            "id": 1,
            "name": "Generic Topic",
            "description": " a diam purus. Proin facilisis nisl ut elit efficitur, id pellentesque lectus dapibus. Integer ornare venenatis rutrum. Etiam finibus malesuada erat ut accumsan. Curabitur hendrerit, turpis a congue viverra, ipsum dolor euismod metus, quis rhoncus tellus urna et enim"
        },
        {
            "id": 2,
            "name": "Top Topic",
            "description": "a diam purus. Proin facilisis nisl ut elit efficitur, id pellentesque lectus dapibus. Integer ornare venenatis rutrum. Etiam finibus malesuada erat ut accumsan. Curabitur hendrerit, turpis a congue viverra, ipsum dolor euismod metus, quis rhoncus tellus urna et enim"
        },
        {
            "id": 3,
            "name": "Senior team topic",
            "description": "A senior team topic"
        },
        {
            "id": 1,
            "name": "Generic Topic",
            "description": " a diam purus. Proin facilisis nisl ut elit efficitur, id pellentesque lectus dapibus. Integer ornare venenatis rutrum. Etiam finibus malesuada erat ut accumsan. Curabitur hendrerit, turpis a congue viverra, ipsum dolor euismod metus, quis rhoncus tellus urna et enim"
        },
        {
            "id": 2,
            "name": "Top Topic",
            "description": "a diam purus. Proin facilisis nisl ut elit efficitur, id pellentesque lectus dapibus. Integer ornare venenatis rutrum. Etiam finibus malesuada erat ut accumsan. Curabitur hendrerit, turpis a congue viverra, ipsum dolor euismod metus, quis rhoncus tellus urna et enim"
        },
        {
            "id": 3,
            "name": "Senior team topic",
            "description": "A senior team topic"
        }
    ]

    return (
        <>
        <Header />
        <Container>
        
        <CreateTopicModal
         isOpen={modalIsOpen} 
         onRequestClose={closeModal}
        />
            <div className="main-div-element">
                <p className="master-title-element">Topics</p>
                <button type="button" onClick={openModal}> Create a topic </button>
            </div>

            {
                topics.map(element => 
                    <div className="topics-div" key={element.id} >
                        <img src={stLogo} alt="icone"/>
                        <div className="div-sub-element">
                            <p className="topic-title"> {element.name} </p> 
                            <p className="topic-description"> {element.description} </p>
                        </div>
                    </div>
                )
            }

        </Container>
        </>
    )
}