import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './VolunteerReg.css'

const VolunteerReg = () => {
    const [loggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        const eventDetails = { ...loggedInUser, event: data, registerTime: new Date().toDateString('dd/MM/yy') }
        fetch('https://fierce-tundra-78625.herokuapp.com/registerEvents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your order posted successfully');
                    history.push('/tasks')
                }
            })
    }
    return (
        <div className="regForm">
            <h4>Register as a Volunteer</h4> <br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" type="text" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Type your name" />
                {errors.name && <span className="error">Name is required</span>}
                <br />

                <input name="email" type="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Enter username or email" />
                {errors.email && <span className="error">Email is required</span>}
                <br />

                <input name="date" type="date" ref={register({ required: true })} id="" />
                <br />

                <input name="description" type="text" ref={register({ required: true })} placeholder="Type description" />
                <br />

                <input name='organize' type="text" ref={register({ required: true })} placeholder="Organize books from the library" />
                <br /> <br />

                <button type="submit" name="Registration" >Registration</button>
            </form>

        </div >
    );
};

export default VolunteerReg;