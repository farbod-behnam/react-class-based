
import classes from "./User.module.css";

interface Props {
    name: string;
}

export default function User(props: Props) {

    return (
        <li className={classes.user}>{props.name}</li>
    );
}