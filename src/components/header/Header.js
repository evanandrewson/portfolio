import React from 'react';
import styles from './Header.css';
import Navigation from './Navigation';


const Header = () => {
  return (
    <>
      <div className={styles.Header}>
        <section className={styles.headerText}>
          <h1>EVAN ANDREWSON</h1>
          <p>SOFTWARE DEVELOPER</p>
        </section>
        <Navigation />
      </div>
    </>
  );
};

export default Header;
