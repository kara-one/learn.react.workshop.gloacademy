import './footer.css';

import React, { useEffect, useState } from 'react';

import FetchData from '../../service/FetchData';
import logo from '../../logo.svg';

const fetchData = new FetchData();

const navTitles = {
    elon_twitter: 'Elon Musk Twitter',
    flickr: 'Flickr',
    twitter: 'Twitter',
    website: 'Website',
}

const Footer = () => {
    const [company, setCompany] = useState([]);

    useEffect(() => {
        fetchData.getCompany().then((item) => setCompany(item));
    }, []);

    return (
        <footer className="footer">
            <img src={logo} alt="logo Space X" className="logo" />
            <nav className="footer-nav">
                <ul className="list">
                    {company.links && Object.keys(company.links).map((key) => (
                        <li className="item" key={key}>
                            <a
                                href={company.links[key]}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="item-link"
                            >
                                {navTitles[key]}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <p className="footer-text">
                For additional questions, contact
                <a className="footer-link" href="mailto:rideshare@spacex.com">
                    rideshare@spacex.com
                </a>
            </p>
        </footer>
    );
};

export default Footer;
