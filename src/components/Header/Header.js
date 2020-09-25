import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react';
import { Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assests/ICON/logo2.png'
import './Header.css'
import { UserContext } from '../../App';

const Header = () => {
    const [signInUser, setSignInUser] = useContext(UserContext);
    return (
        <div className="nav-border sticky-top">
            <Navbar className="navber  d-flex justify-content-between">
                <Navbar.Brand><Link to="/"><img src={logo} alt="" /></Link></Navbar.Brand>
                <Form inline>
                    <Nav>
                        <Link to="/cart" className="navLinkCart"><FontAwesomeIcon icon={faCartPlus} /></Link>
                        <Link to="/home" className="navLink">Home</Link>
                        <Link to="/about" className="navLink">About</Link>
                        {
                            signInUser.email ? <Link to="/login" className="navLink" onClick={() => { setSignInUser({}) }}>Logout</Link> :
                                <Link to="/login" className="navLink">Login</Link>
                        }
                        <Link to="" className="navLinkUser">{signInUser.name}</Link>
                    </Nav>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;