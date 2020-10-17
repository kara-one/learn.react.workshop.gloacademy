import './header.css';

import { Link, NavLink } from 'react-router-dom';

import React from 'react';
import logo from '../../logo.svg';

const Header = ({ rockets, changeRocket }) => (
    <header className="header">
        <Link to="/">
            <img src={logo} alt="Logo Space X" className="logo" />
        </Link>
        <nav className="main-nav nav">
            <ul className="list">
                {rockets.map((item, i) => (
                    <li className="item" key={i}>
                        <NavLink
                            to={`/rocket/${item.replace(' ', '_').toLowerCase()}`}
                            onClick={() => {
                                changeRocket(item);
                            }}
                            className="item-link"
                            activeClassName="active"
                        >
                            {item}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
        <nav className="secondary-nav">
            <ul className="list">
                <li className="item">
                    <NavLink exact to="/" className="item-link" activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li className="item">
                    <NavLink to="/calendar" className="item-link" activeClassName="active">
                        Calendar
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
