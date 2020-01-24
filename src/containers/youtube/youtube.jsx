import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function Youtube () {
    const [newData, setNewData] = useState([]);
    const [picture, setPicture] = useState('');
    const [name, setName] = useState('');
    const [trailer, setTrailer] = useState('');
    const [views, setViews] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        async function getData () {
            const response = await fetch('https://marble-api.herokuapp.com/youtube');
            // const response = await fetch('http://localhost:3060/youtube');
            const data = await response.json();
            const videoURL = data.data[2]['video'].replace('watch?v=', 'embed/');
            let baseData = data.data[1]['description'].split(' ');
            let secondLast = baseData[baseData.length -2];
            let last = baseData[baseData.length -1];
            let views = secondLast.concat(` ${last}`);
            setNewData(data.data[0]['results'][1]['locations'][0]);
            setPicture(data.data[0]['results'][1]['picture']);
            setName(data.data[0]['results'][1]['name']);
            setTrailer(videoURL);
            setViews(views);
            setTitle(data.data[1]['title']);
            setDescription(data.data[1]['meta_data'][0]);
            console.log(videoURL);
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
                                <Card.Text><a href={newData.url} className="text-decoration-none" style={{ color: 'black' }}>{name}</a></Card.Text>
                                <a href={newData.url}>
                                    <img src={picture} className="img-fluid rounded" width="600" height="338" alt=''></img>
                                </a> 
                                <br />
                                <hr />
                                <Card className="my-3">
                                    <a href={newData.url} style={{ color: 'black' }} class="text-decoration-none">
                                        <Row>
                                            <Col xs={12} md={12} lg={12} xl={7}>
                                                <Card className="border-0">
                                                    <Card.Body>
                                                        <div className="embed-responsive embed-responsive-4by3">
                                                            <iframe
                                                                title="youtube premium"
                                                                width="640" 
                                                                height="360" 
                                                                src={`${trailer}?modestbranding=1`}
                                                                frameBorder="0" 
                                                                allowFullScreen
                                                                className="rounded"
                                                            />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xs={12} md={12} lg={12} xl={5}>
                                                <Card className="border-0">
                                                    <Card.Body>
                                                        <Card.Text className="font-weight-bold">{title}</Card.Text>
                                                        <Card.Text style={{ fontSize: '13px' }}>{views}</Card.Text>
                                                        <Card.Text>{description}</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </a>
                                </Card>
                                <img src={newData.icon} className="mt-3" alt='' ></img>
                            </div>
                        )
                        : null 
                    }
                </Card.Body>
            </Card>
        </div>
    );
}

export default Youtube;