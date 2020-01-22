import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Netflix from './containers/netflix/netflix';
import Youtube from './containers/youtube/youtube';
import Amazon from './containers/amazon/amazon';

function App() {
  return (
    <div>
        <Card className="border-0">
          <Card.Body>
            <Row>
              <Col xs={12} md={6} lg={4}>
                <Netflix />
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Youtube />
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Amazon />
              </Col>
            </Row>
          </Card.Body>
        </Card>
    </div>
  );
}

export default App;
