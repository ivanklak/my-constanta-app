import React from "react";
import {Link} from 'react-router-dom';

import styles from './styles.module.css';

const menuItems = [
    {key: '/info', label: 'Info', path: '/'},
    {key: '/maps', label: 'Maps', path: '/maps'},
    {key: '/timer', label: 'Timer', path: '/timer'},
];

const Navbar = () => {

    return (
        <nav className={styles.navbarContainer}>
            {menuItems.map(item => (
                <div key={item.key} className={styles.navbarItem}>
                    <Link to={item.path}>{item.label}</Link>
                </div>
            ))}
        </nav>
    )
}

export default Navbar;