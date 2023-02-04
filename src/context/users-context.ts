import React from "react";
import { IUsers } from "../interfaces/Users.interface";

const UsersContext = React.createContext<IUsers>({
    users: []
});

export default UsersContext;