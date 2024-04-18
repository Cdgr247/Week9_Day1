import { NavItem } from "react-bootstrap";
import { Navbar } from "react-bootstrap/Navbar";
import { NavLink } from "react-bootstrap/NavLink";

export default function Sidebar() {
    return (
        <Navbar sticky='top' className='flex-column sidebar'>
            <NavItem>
                <NavLink>Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink>Feed</NavLink>
            </NavItem>
            <NavItem>
                <NavLink>My Page</NavLink>
            </NavItem>
        </Navbar>
    )
}