import "./Header.css";

import { Container, Nav, Navbar } from 'react-bootstrap'

import Images from '../../images/header'
import { NavLink } from 'react-router-dom';

function Header() {

    return (
        <header className="container-fluid">
            <NavLink className={({ isActive }) => (isActive ? 'active nav-link logo-img' : 'inactive nav-link logo-img')}  to="/">
                <img src={Images.logo}/>
            </NavLink>
            <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto navbar-nav">
                            <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}  to="/">Главная</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}  to="/team">Команда</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}  to="/contacts">Контакты</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}


export default Header;