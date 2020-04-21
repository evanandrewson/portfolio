import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.css';
import pdf from '../../assets/resume.pdf';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Navigation = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // return (
  //   <div className={styles.Navigation}>
  //     {!isOpen && <button className={styles.openButton} onClick={() => setIsOpen(!isOpen)}>☰</button>}
  //     {isOpen && <nav>
  //       <button className={styles.closeButton} onClick={() => setIsOpen(!isOpen)}>❌</button>
  //       <Link to='/'>About</ Link>
  //       <Link to='/projects'>Projects</ Link>
  //       <a target="_blank" rel="noopener noreferrer" href={pdf}>Resume</a>
  //       <Link to='/contact'>Contact</ Link>
  //     </nav>}
  //   </div>
  // );

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className={styles.Navigation}>
      <div id="placeholder"></div>
      <Button id="button" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      ☰
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={document.getElementById('placeholder')}
        keepMounted
        open={isOpen}
        onClose={handleClose}
        className={styles.Menu}
      >
        <MenuItem onClick={handleClose}><Link to='/'>About</ Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/projects'>Projects</ Link></MenuItem>
        <MenuItem onClick={handleClose}><a target="_blank" rel="noopener noreferrer" href={pdf}>Resume</a></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/contact'>Contact</ Link></MenuItem>
      </Menu>
    </div>

  );
};

export default Navigation;
