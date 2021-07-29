import Modal from 'react-modal';

import { Container } from './styles';

import stLogo from '../../assets/stLogo.png';

interface iTopicDTO {
    id: string;
    name: string;
    description: string;
}

interface TopicDescriptionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    elementData: iTopicDTO;
}

export function TopicDescriptionModal({ isOpen, onRequestClose, elementData }: TopicDescriptionModalProps) {
    Modal.setAppElement('#root');

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="modal-content"
        >
            <Container>
                <div>
                    {Object.keys(elementData).length ? (
                        <>
                            <button
                                type="button"
                                onClick={onRequestClose}
                                className="react-modal-close"
                            >
                                <p>x</p>
                            </button>
                            <h2>{elementData.name}</h2>

                            <img src={stLogo} alt="stLogo" className="main-image" />

                            <h3 className="comments-desc">{elementData.description}</h3>
                            <h3>Comments</h3>
                            <div className="comments-div">
                                    <img src={stLogo} alt="stLogo" className="comment-image" />
                                    <p>Random comment from random people</p>
                            </div>
                        </>
                    ) : null}
                </div>

            </Container>

        </Modal>
    )

}