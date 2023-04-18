import * as React from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import ThemeToggle from '../theme-toggle/ThemeToggle';

const Navbar = () => {
    return (
        <nav className={styles.container}>
            <div className={styles.logo}>
                <Link to='/'>
                    <h1>Real Estate</h1>
                </Link>
            </div>
            <div className={styles.menu}>
                <Link to='/'>All</Link>
                <Link to='/estate/add'>Add New</Link>
                <ThemeToggle />
            </div>
        </nav>
    );
}

export default Navbar;