import React from 'react';
import { useHistory } from 'react-router-dom';
import './VolunteerTasks.css';

const VolunteerTasks = (props) => {
    const { title, photoUrl, _id } = props.task;
    const history = useHistory();

    const handleBook = (id) => {
        history.push(`/registration/${id}`);
    }
    return (
        <div class="row">
            <div class="col mb-3">
                <div className="card">
                    <img src={photoUrl} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <button onClick={() => handleBook(_id)} variant="contained" color="primary">
                            Register Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerTasks;