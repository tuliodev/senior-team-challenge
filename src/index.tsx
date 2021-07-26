import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';

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
    ];

    this.get('/topics', () => {
      return topics;
    })

    this.post('/topics', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      const {name, description} = data;

      const lastTopicId = topics[topics.length -1].id

      const idIncrement = lastTopicId + 1

      const topicData = {
        id: idIncrement,
        name,
        description
      }

      topics.push(topicData);

      return topics;
    })

  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

