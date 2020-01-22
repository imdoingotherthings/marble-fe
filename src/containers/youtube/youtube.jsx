import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

function Youtube () {
    const [newData, setNewData] = useState([]);
    const [picture, setPicture] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        async function getData () {
            const response = await fetch('http://localhost:3060/youtube');
            const data = await response.json();
            setNewData(data.data['results'][1]['locations'][0]);
            setPicture(data.data['results'][1]['picture']);
            setName(data.data['results'][1]['name']);
        }

        getData();
    }, []);

    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>Youtube</Card.Title>
                    <hr className="w-25 d-flex"/>
                    { 
                        newData.length !== 0 ? (
                            <div>
                                <h4>{name} - <span><img src={newData.icon} alt='' ></img></span></h4>
                                <a href={newData.url}>
                                    <img src={picture} width="300" height="169" alt=''></img>
                                </a> 
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