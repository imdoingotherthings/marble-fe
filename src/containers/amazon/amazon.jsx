import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function Amazon () {
    const [newData, setNewData] = useState([]);
    const [picture, setPicture] = useState('');
    const [name, setName] = useState('');
    const [trailer, setTrailer] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');

    useEffect(() => {
        async function getData () {
            // const response = await fetch('https://marble-api.herokuapp.com/amazon');
            const response = await fetch('http://localhost:3060/amazon');
            const data = await response.json();
            const videoURL = data.data[2]['video'].replace('watch?v=', 'embed/');
            setNewData(data.data[0]['results'][0]['locations'][0]);
            setPicture(data.data[0]['results'][0]['picture']);
            setTrailer(videoURL);
            setName(data.data[0]['results'][0]['name']);
            setDescription(data.data[1]['description']);
            setRating(data.data[1]['imdbRating']);
        }

        getData();
    }, []);

    return (
        <div className="d-flex justify-content-center">
            <Card className="border-0">
                <Card.Body>
                    { 
                        newData.length !== 0 ? (
                            <div>
                                <Card.Text>{name}</Card.Text>
                                <a href={newData.url}>
                                    <img src={picture} className="img-fluid rounded" width="600" height="338" alt=''></img>
                                </a>
                                <br/>
                                <img src={newData.icon} className="mt-3" alt='' ></img>
                                <Row>
                                    <Col xs={12} md={6} lg={7}>
                                        <Card>
                                            <Card.Body>
                                                <div className="embed-responsive embed-responsive-4by3">
                                                    <iframe 
                                                        width="640" 
                                                        height="360" 
                                                        src={trailer} 
                                                        frameBorder="0" 
                                                        allowFullScreen
                                                    />
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} md={6} lg={5}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Text>{name}</Card.Text>
                                                <Card.Text>{rating}</Card.Text>
                                                <Card.Text>{description}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        )
                        : null 
                    }
                </Card.Body>
            </Card>
        </div>
    );
}

export default Amazon;