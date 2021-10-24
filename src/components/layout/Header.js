import React from 'react';
import {Link} from 'react-router-dom';
import header from './Header.module.css';

export const Header = () => {
    return (
        <header className={header.header}>
            <div className={header.logo}>POS Demo</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
