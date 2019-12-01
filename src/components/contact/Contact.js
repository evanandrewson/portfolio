import React, { useState } from 'react';
import styles from './Contact.css';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

const Contact = () => {
  const [phoneHidden, setPhoneHidden] = useState(true);
  const [emailHidden, setEmailHidden] = useState(true);

  return (
    <div className={styles.Contact}>
      <div className={styles.content}>
        <section className={styles.imgContainer}>
          <a 
            href="https://github.com/evanandrewson" 
            target="_blank"
            rel="noopener noreferrer"   
          >
            <img className={styles.github} src={github} />
          </ a>
          <a 
            href="https://www.linkedin.com/in/evan-andrewson/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.linkedIn} src={linkedin} />
          </ a>
        </section>
        <section className={styles.container}>
          <div>
            <button onClick={() => setPhoneHidden(!phoneHidden)}>{phoneHidden ? 'Show' : 'Hide' } Phone Number</button>
            {!phoneHidden && <h1>971-940-4647</h1>}
          </div>
          <div>
            <button onClick={() => setEmailHidden(!emailHidden)}>{emailHidden ? 'Show' : 'Hide' } Email</button>
            {!emailHidden && <h1>evanandrewson@gmail.com</h1>}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
