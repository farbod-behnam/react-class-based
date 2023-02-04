import { Fragment, useState, useEffect, FormEvent, Component } from 'react';

import classes from "./UserFinder.module.css";
import { UserModel } from '../../models/User.model';
import Users from '../Users/Users';

const DUMMY_USERS: UserModel[] = [
    { id: "u1", name: "Max" },
    { id: "u2", name: "Manual" },
    { id: "u3", name: "Julie" },
];

interface Props {

}

interface State {
    filteredUsers: UserModel[];
    searchTerm: string;
}


export default class UserFinder extends Component<Props, State> {

    constructor(props: Props, state: State) {
        super(props, state);
        this.state = {
            filteredUsers: [],
            searchTerm: ""
        }
    }

    componentDidMount(): void {
        // Send http request ...
        this.setState({ filteredUsers: DUMMY_USERS })
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({ filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm)) })
        }
    }

    searchChangeHandler = (event: FormEvent<HTMLInputElement>) => {
        this.setState({ searchTerm: event.currentTarget.value })
    };


    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <Users users={this.state.filteredUsers} />
            </Fragment>
        )
    }
}


// export default function UserFinder() {

//     const [filteredUsers, setFilteredUsers] = useState<UserModel[]>(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState<string>("");

//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);

//     const searchChangeHandler = (event: FormEvent<HTMLInputElement>) => {
//         setSearchTerm(event.currentTarget.value);
//     };

//     return (
//         <Fragment>
//             <div className={classes.finder}>
//                 <input type='search' onChange={searchChangeHandler} />
//             </div>
//             <Users users={filteredUsers} />
//         </Fragment>
//     );
// };
