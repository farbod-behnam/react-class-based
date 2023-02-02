import { Component, useState } from 'react';
import { UserModel } from '../../models/User.model';

import User from '../user/User';
import classes from './Users.module.css';

const DUMMY_USERS = [
    new UserModel("u1", "Max"),
    new UserModel("u2", "Manuel"),
    new UserModel("u3", "Julie"),
];

interface Props {

}

interface State {
    showUsers: boolean;
}

export default class Users extends Component<Props, State> {

    constructor(state: State) {
        super(state)
        this.state = { showUsers: true }
    }

    toggleUsersHandler = () => {
        // this.setState({showUsers: false});
        this.setState((prevState) => {
            return { showUsers: !prevState.showUsers };
        })
    }

    private usersList = (
        <ul>
            {DUMMY_USERS.map((user) => (
                <User key={user.id} name={user.name} />
            ))}
        </ul>
    );

    render() {
        return (
            <div className={classes.users}>
                <button onClick={this.toggleUsersHandler.bind(this)}>
                    {this.state.showUsers ? 'Hide' : 'Show'} Users
                </button>
                {this.state.showUsers && this.usersList}
            </div>
        );
    }

}

// export default function Users() {

//     const [showUsers, setShowUsers] = useState<boolean>(true);

//     const toggleUsersHandler = () => {
//         setShowUsers((prevState) => !prevState);
//     };

//     const usersList = (
//         <ul>
//             {DUMMY_USERS.map((user) => (
//                 <User key={user.id} name={user.name} />
//             ))}
//         </ul>
//     );

//     return (
//         <div className={classes.users}>
//             <button onClick={toggleUsersHandler}>
//                 {showUsers ? 'Hide' : 'Show'} Users
//             </button>
//             {showUsers && usersList}
//         </div>
//     );
// }