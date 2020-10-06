import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './SelectedTasks.css';

const SelectedTasks = () => {
    const [loggedInUser] = useContext(UserContext);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('https://fierce-tundra-78625.herokuapp.com/tasks?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`,
            }
        })
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    const deleteTask = (event, id) => {
        console.log('delete task');
        fetch(`https://fierce-tundra-78625.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    event.target.parentNode.style.display = 'none';
                }
            })
    }
    return (
        <div className="chosentask">
            <h3>Selected tasks of {loggedInUser.name} </h3>
            {
                tasks.map(task =>
                    <div className="task-container">
                        <div className="regtsk">
                            <h3>{task.event.description}</h3>
                            <p>Time: {task.event.date}</p>
                            <button onClick={() => deleteTask(tasks._id)}>Cancel</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default SelectedTasks;