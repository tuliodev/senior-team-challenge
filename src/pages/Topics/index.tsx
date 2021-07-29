import { Header } from "../../components/Header";

import stLogo from '../../assets/stLogo.png';

import { useState, useEffect} from 'react';

import { Container} from './styles';

import { CreateTopicModal } from "../../components/CreateTopicModal";

import { TopicDescriptionModal } from "../../components/TopicDescriptionModal";

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

    const [data, setData] = useState<TopicDTO>({} as TopicDTO);

    const [topicDescriptionModalIsOpen, setTopicDescriptionModalIsOpen] = useState(false);

    function openTopicDescriptionModal (value: TopicDTO) {
        setData(value);
        setTopicDescriptionModalIsOpen(true);
    }

    function closeTopicDescriptionModal () {
        setTopicDescriptionModalIsOpen(false);
    }

    const [topicModalIsOpen, setTopicModalIsOpen] = useState(false);

    function openTopicModal () {
        setTopicModalIsOpen(true);
    }

    function closeTopicModal () {
        setTopicModalIsOpen(false);
        api.get('/topics').then(res => setTopics(res.data))
    }
    
    return (
        <>
        <Header />
        <Container>
        
        <CreateTopicModal
         isOpen={topicModalIsOpen} 
         onRequestClose={closeTopicModal}
        />

        <TopicDescriptionModal
         isOpen={topicDescriptionModalIsOpen} 
         onRequestClose={closeTopicDescriptionModal}
         elementData={data}
        />
            <div className="main-div-element">
                <p className="master-title-element">Topics</p>
                <button type="button" onClick={openTopicModal}> Create a topic </button>
            </div>

            {
                topics.map(element => 
                    <div className="topics-div" key={element.id} onClick={() => openTopicDescriptionModal(element)}>
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