import React from 'react';
import FakeData from '../../FakeData/FakeData';

const Events = () => {
    const handleAddEvents = () => {
        fetch('https://fierce-tundra-78625.herokuapp.com/addEvents', {
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