import Modal from 'react-modal';

import { Container } from './styles';

import { useState, FormEvent, ChangeEvent } from 'react';

import { api } from '../../services/api';

interface CreateTopicModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function CreateTopicModal({isOpen, onRequestClose}: CreateTopicModalProps) {
    Modal.setAppElement('#root');

    const [formData, setformData] = useState({
      id: '',
      name: '',
      description: '',
    });
  

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
      const { name, value } = event.target;
      setformData({ ...formData, [name]: value });
    }
  
      async function handleSubmit(event: FormEvent) {
          event.preventDefault();

          const { name, description } = formData;
          await api.post('/topics', {
             name: name || " ",
             description: description || " "
          })

          onRequestClose();
      }

    return (
        <Modal 
          isOpen={isOpen} 
          onRequestClose={onRequestClose}
          className="modal-content"
        >

            <Container>

                <div>
                <h2>Create a topic</h2>

                <input 
                  type="text" 
                  placeholder="Title"
                  name="name"
                  onChange={handleInputChange}
                />

                <input 
                  type="text" 
                  placeholder="Description"
                  name="description"
                  onChange={handleInputChange}
                />


                <button type="submit" onClick={handleSubmit}>
                    Create
                </button>

                <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
                >
                <p>Close</p>
                </button>


                </div>
                
            </Container>

        </Modal>

    )
}