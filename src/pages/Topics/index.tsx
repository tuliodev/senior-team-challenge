import { Header } from "../../components/Header";

import stLogo from '../../assets/stLogo.png';

import { useState, useEffect} from 'react';

import { Container} from './styles';

import { CreateTopicModal } from "../../components/CreateTopicModal";

import { api } from '../../services/api';


interface TopicDTO {
    id: string;
    name: string;
    description: string;
}

export default function Topics () {
    useEffect(() => {
        api.get('/topics').then(res => setTopics(res.data))
    }, [])

    const [topics, setTopics] = useState<TopicDTO[]>([])


    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal () {
        setModalIsOpen(true);
    }

    function closeModal () {
        setModalIsOpen(false);
            api.get('/topics').then(res => setTopics(res.data))

    }
    
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