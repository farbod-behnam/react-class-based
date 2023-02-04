import { Fragment, useState, useEffect, FormEvent } from 'react';

import classes from "./UserFinder.module.css";
import { UserModel } from '../../models/User.model';
import Users from '../Users/Users';

const DUMMY_USERS: UserModel[] = [
    { id: "u1", name: "Max" },
    { id: "u2", name: "Manual" },
    { id: "u3", name: "Julie" },
];

export default function UserFinder() {

    const [filteredUsers, setFilteredUsers] = useState<UserModel[]>(DUMMY_USERS);
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        setFilteredUsers(
            DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
        );
    }, [searchTerm]);

    const searchChangeHandler = (event: FormEvent<HTMLInputElement>) => {
        setSearchTerm(event.currentTarget.value);
    };

    return (
        <Fragment>
            <div className={classes.finder}>
                <input type='search' onChange={searchChangeHandler} />
            </div>
            <Users users={filteredUsers} />
        </Fragment>
    );
};
