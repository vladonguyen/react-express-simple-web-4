import { Link, NavLink } from "react-router";
import classes from "./Navigation.module.css";

export default function Navigation(){
//todo auth links
    return(
        <nav className={classes.navLinks}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/create">Create</NavLink>
            <NavLink to="/regiser">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/logout">Logout</NavLink>
        </nav>
    )
}