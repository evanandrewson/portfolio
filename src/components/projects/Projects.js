import React from 'react';
import bashful from '../../assets/BASHful.png';
import tone from '../../assets/tone.png';
import tarot from '../../assets/tarot.png';
import crypto from '../../assets/crypto.png';
import styles from './Projects.css';


const Projects = () => {
  return (
    <div className={styles.Projects}>
      <section>
        <img src={crypto} />
        <div>
          <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/Crypto-Punks/fe">Front-end Github</a></p>
          <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/Crypto-Punks/be">Back-end Github</a></p>
          <p><a target="_blank" rel="noopener noreferrer" href="https://crypto-trades-2020.netlify.app/">Deployed Site</a></p>
          <p>
            React, Redux, Node, Express, MongoDB, Mongoose < br/>
            Fantasy cryptocurrency trading app with real time data <br />
          </p>
        </div>
      </section>
      <section>
        <img src={bashful} />
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Team-Dead-Ant/BASHful">Github</a>
          <p>
            Node, Express, MongoDB, Mongoose < br/>
            Terminal based dating simulator < br/>
            User authentication < br/>
          </p>
        </div>
      </section>
      <section>
        <div>
          <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/mood-mangoes/mood-mangoes.github.io">Github</a></p>
          <p><a target="_blank" rel="noopener noreferrer" href="https://tone-check.herokuapp.com/">Deployed site</a></p>
          <p>
            Vanilla Javascript and SQL utilizing IBM Watson's API <br />
            Text sentiment analyzer <br />
            Functionality across multiple users <br />
          </p>
        </div>
        <img src={tone} />
      </section>
      <section>
        <img src={tarot} />
        <div>
          <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/tarot-reader/tarot-reader.github.io">Github</a></p>
          <p><a target="_blank" rel="noopener noreferrer" href="https://tarot-reader.github.io/">Deployed site</a></p>
          <p>
            Vanilla Javascript < br/>
            Randomized tarot readings and matching game <br />
            Persistence utilizing local storage <br />
          </p>
        </div>
      </section>
    </div>
  );
};

export default Projects;
