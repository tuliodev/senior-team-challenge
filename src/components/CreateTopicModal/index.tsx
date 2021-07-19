import Modal from 'react-modal';

import { Container } from './styles';

interface CreateTopicModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function CreateTopicModal({isOpen, onRequestClose}: CreateTopicModalProps) {
    Modal.setAppElement('#root');
    return (
        <Modal 
          isOpen={isOpen} 
          onRequestClose={onRequestClose}
          className="modal-content"
        >

            <Container>


                <h2>Create a topic</h2>

                <input 
                  type="text" 
                  placeholder="Title"
                />

                <input 
                  type="text" 
                  placeholder="Description"
                />


                <button type="submit">
                    Create
                </button>

                <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
                >
                <p>Close</p>
            </button>

                
            </Container>

        </Modal>

    )
}