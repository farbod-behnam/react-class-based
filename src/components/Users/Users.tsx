import { Component, useState } from 'react';
import { UserModel } from '../../models/User.model';

import User from '../User/User';
import classes from './Users.module.css';



interface Props {
    users: UserModel[]
}

interface State {
    showUsers: boolean;
}


export default class Users extends Component<Props, State> {

    constructor(props: Props, state: State) {
        super(props, state);
        this.state = { showUsers: true }
    }

    toggleUsersHandler = () => {
        // this.setState({showUsers: false});
        this.setState((prevState) => {
            return { showUsers: !prevState.showUsers };
        })
    }



    render() {

        const usersList = (
            <ul>
                {this.props.users.map((user) => (
                    <User key={user.id} name={user.name} />
                ))}
            </ul>
        );
        return (
            <div className={classes.users}>
                <button onClick={this.toggleUsersHandler.bind(this)}>
                    {this.state.showUsers ? 'Hide' : 'Show'} Users
                </button>
                {this.state.showUsers && usersList}
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