import React from 'react';
import { useHistory } from 'react-router-dom';
import './VolunteerTasks.css';

const VolunteerTasks = (props) => {
    const { title, photoUrl } = props.task;
    const history = useHistory();

    const handleBook = (title) => {
        history.push(`/registration/${title}`);
    }
    return (
        <div class="row">
            <div class="col mb-3">
                <div className="card">
                    <img style={{ width: '250px', height: '250px' }} src={photoUrl} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <button onClick={() => handleBook(title)} variant="contained" color="primary">
                            Register Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerTasks;