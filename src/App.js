import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Netflix from './containers/netflix/netflix';
import Youtube from './containers/youtube/youtube';
import Amazon from './containers/amazon/amazon';

function App() {
  return (
    <div className="App">
      <Container>
        <Card>
          <Card.Body>
            <Netflix />
            <Youtube />
            <Amazon />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
