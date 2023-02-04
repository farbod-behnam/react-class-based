
import { Component } from "react";
import classes from "./User.module.css";

interface Props {
    name: string;
}

export default class User extends Component<Props> {

    render() {
        return <li className={classes.user}>{this.props.name}</li>
    }
}

// export default function User(props: Props) {

//     return (
//         <li className={classes.user}>{props.name}</li>
//     );
// }