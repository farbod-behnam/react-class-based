import { useState } from 'react';
import { UserModel } from '../../models/User.model';

import User from '../user/User';
import classes from './Users.module.css';

const DUMMY_USERS = [
    new UserModel("u1", "Max"),
    new UserModel("u2", "Manuel"),
    new UserModel("u3", "Julie"),
];

export default function Users() {

    const [showUsers, setShowUsers] = useState<boolean>(true);

    const toggleUsersHandler = () => {
        setShowUsers((prevState) => !prevState);
    };

    const usersList = (
        <ul>
            {DUMMY_USERS.map((user) => (
                <User key={user.id} name={user.name} />
            ))}
        </ul>
    );

    return (
        <div className={classes.users}>
            <button onClick={toggleUsersHandler}>
                {showUsers ? 'Hide' : 'Show'} Users
            </button>
            {showUsers && usersList}
        </div>
    );
}