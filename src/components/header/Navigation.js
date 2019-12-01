import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.css';
import pdf from '../../assets/resume.pdf';


const Navigation = () => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={styles.Navigation}>
      <Link to='/'>About</ Link>
      <Link to='/projects'>Projects</ Link>
      <a target="_blank" rel="noopener noreferrer" href={pdf}>Resume</a>
      <Link to='/contact'>Contact</ Link>
    </nav>
  );
};

export default Navigation;
