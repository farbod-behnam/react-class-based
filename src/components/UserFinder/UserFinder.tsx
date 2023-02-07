import { Fragment, FormEvent, Component, ContextType } from 'react';

import classes from "./UserFinder.module.css";
import { UserModel } from '../../models/User.model';
import Users from '../Users/Users';
import UsersContext from '../../context/users-context';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';


interface Props {

}

interface State {
    filteredUsers: UserModel[];
    searchTerm: string;
}


export default class UserFinder extends Component<Props, State> {

    // static contextType: Context<IUsers> | undefined = UsersContext;

    static contextType = UsersContext;
    context!: ContextType<typeof UsersContext>;

    constructor(props: Props, state: State) {
        super(props, state);
        this.state = {
            filteredUsers: [],
            searchTerm: ""
        }
    }

    componentDidMount(): void {
        // Send http request ...
        this.setState({ filteredUsers: this.context.users})
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({ filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm)) })
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
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
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
