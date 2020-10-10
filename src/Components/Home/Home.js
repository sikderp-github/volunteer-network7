import React, { useContext} from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { UserContext } from '../../App';
import VolunteerTasks from '../VolunteerTasks/VolunteerTasks';
import './Home.css';

const Home = () => {
      const {tasks} =useContext(UserContext);

    return (
        <>
            <div className="homePage">
                <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
                <InputGroup className="mb-3 searchBox">
                    <FormControl
                        placeholder="Search ..."
                        aria-label="username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>

            <div className="row">
                {
                    tasks.map(task => <VolunteerTasks task={task} key={tasks.eventId} />)
                }
            </div>
        </>
    );
};

export default Home;