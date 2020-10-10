import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './SelectedTasks.css';

const SelectedTasks = () => {
    const { loggedInUser } = useContext(UserContext);
    const [task, setTask] = useState([])
    console.log(task);

    useEffect(() => {
        fetch('https://fierce-tundra-78625.herokuapp.com/tasks?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`,
            }
        })
            .then(res => res.json())
            .then(data => setTask(data))
    }, [])

    useEffect(() => {
        fetch(`https://fierce-tundra-78625.herokuapp.com/regEvents?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setTask(data))

    }, [])

    const deleteTask = (id) => {
        console.log(id);
        fetch(`https://fierce-tundra-78625.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    const newEvent = task.filter(tsk => tsk._id !== id)
                    setTask(newEvent);
                }
            })
    }
    return (
        <div className="chosentask">
            <h3>Selected tasks of {loggedInUser.name} </h3>
            {
                task.map(task1 =>
                    <div className="task-container">
                        <div className="regtsk">
                            <h3>{task1.event.description}</h3>
                            <p>Time: {task1.event.date}</p>
                            <button onClick={() => deleteTask(task1._id)}>Cancel</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default SelectedTasks;