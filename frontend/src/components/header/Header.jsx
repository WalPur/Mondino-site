import "./Header.css";

import { Container, Nav, Navbar } from 'react-bootstrap'

import { NavLink } from 'react-router-dom';

function Header() {

    return (
        <header id="header">
            <div className="header__container container">
                <NavLink className={({ isActive }) => (isActive ? 'active nav-link logo-img' : 'inactive nav-link logo-img')}  to="/">
                    <img src="/images/mondino_logo.svg"/>
                    <div className="header__title">
                        Tracker
                    </div>
                </NavLink>
                <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light">
                    <Container className="nav__container">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto navbar-nav">
                                <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}  to="/">Главная</NavLink>
                                <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}  to="/team">Команда</NavLink>
                                <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}  to="/contacts">Контакты</NavLink>
                                <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')} to="/interactions">DDI</NavLink>
                                <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')} to="/application">Заявка для партнерства</NavLink>
                                <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')} to="/faq">FAQ</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header>
    );
}


export default Header;