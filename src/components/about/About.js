import React from 'react';
import styles from './About.css';
import evan from '../../assets/evan.jpeg';

const About = () => {
  return (
    <div className={styles.About}>
      <img src={evan} />
      <p>Full Stack Software Developer with a passion for problem solving and ability to
      thrive working individually or with teams. I am currently looking to join an
      organization that values growth and continuous learning.</p>
    </div>
  );
};

export default About;
