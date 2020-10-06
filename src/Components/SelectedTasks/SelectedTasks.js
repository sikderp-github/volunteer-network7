import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const SelectedTasks = () => {
    const [loggedInUser] = useContext(UserContext);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tasks?email=' + loggedInUser.email, {
            method: 'GET', // get data from sessionStorage
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`,
            }
        })
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return (
        <div>
            <h1>Selected tasks of {loggedInUser.name} </h1>
            <h3>You have: {tasks.length} tasks</h3>
            {
                tasks.map(task =>
                    <div>
                        <div style={{ border: '2px solid blue', margin: '5px', height: '200px', width: '200px' }}>
                            <h3>{task.event.description}</h3>
                            <p>Time: {task.event.date}</p>
                            <button>Cancel</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default SelectedTasks;