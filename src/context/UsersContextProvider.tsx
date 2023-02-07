import { ReactNode } from 'react'
import UsersContext from './users-context';
import { UserModel } from '../models/User.model';
import { IUsers } from '../interfaces/Users.interface';

const DUMMY_USERS: UserModel[] = [
    { id: "u1", name: "Max" },
    { id: "u2", name: "Manual" },
    { id: "u3", name: "Julie" },
];

interface Props {
    children: ReactNode;
}

export default function UsersContextProvider(props: Props) {


  const usersContext: IUsers = {users: DUMMY_USERS}

  return (
    <UsersContext.Provider value={usersContext} >{props.children}</UsersContext.Provider>
  );
}


