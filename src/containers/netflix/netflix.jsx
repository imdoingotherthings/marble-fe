import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

function Netflix () {
    const [newData, setNewData] = useState([]);
    const [picture, setPicture] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        async function getData () {
            const response = await fetch('http://localhost:3060/netflix');
            const data = await response.json();
            setNewData(data.data['results'][0]['locations'][0]);
            setPicture(data.data['results'][0]['picture']);
            setName(data.data['results'][0]['name']);
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
                            </div>
                        )
                        : null 
                    }
                </Card.Body>
            </Card>
        </div>
    );
}

export default Netflix;