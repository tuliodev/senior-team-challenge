import { Header } from "../../components/Header";

import stLogo from '../../assets/stLogo.png';

import { useState } from 'react';

import { Container} from './styles';

import Modal from 'react-modal';

export default function Topics () {

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

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
        }
    ]

    return (
        <>
                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Create topic"
                style={customStyles}
            >
                
                <button onClick={closeModal}>Close</button>
                <div>Create a topic</div>
                <form>
                <p>Name</p>
                <input type="text"/>
                <p>Description</p>
                <input type="text"/>
                <button>Create</button>
                </form>
            </Modal>
        <Header />
        <Container>
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