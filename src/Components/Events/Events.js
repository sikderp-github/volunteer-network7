import React from 'react';
import FakeData from '../../FakeData/FakeData';

const Events = () => {
    const handleAddEvents = () => {
        fetch('http://localhost:5000/addEvents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(FakeData)
        })
    }
    return (
        <div>
            <button onClick={handleAddEvents}>Add Events</button>
        </div>
    );
};

export default Events;