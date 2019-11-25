import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
  return (
    <div className={styles.Header}>
      <nav>
        <Link to='/about'>About</ Link>
        <Link to='/projects'>Projects</ Link>
        <Link to='/resume'>Resume</ Link>
        <Link to='/contact'>Contact</ Link>
        <Link to='/'>Home</ Link>
      </nav>
      <section className={styles.headerText}>
        <h1>Evan Andrewson</h1>
        <p>Software Developer</p>
      </section>
    </div>
  );
};

export default Header;
