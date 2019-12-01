import React, { useState } from 'react';

const Contact = () => {
  const [phoneHidden, setPhoneHidden] = useState(true);
  const [emailHidden, setEmailHidden] = useState(true);

  return (
    <>
      <a 
        href="https://github.com/evanandrewson" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://miro.medium.com/max/1125/1*aFHTAkhTkyWD93-UGRttPw.png" />
      </ a>
      <a 
        href="https://www.linkedin.com/in/evan-andrewson/" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" />
      </ a>
      <h1>971-940-4647</h1>
      <button onClick={() => setPhoneHidden(!phoneHidden)}>{phoneHidden ? 'Show' : 'Hide' } Phone Number</button>
      <h1>evanandrewson@gmail.com</h1>
      <button onClick={() => setEmailHidden(!emailHidden)}>{emailHidden ? 'Show' : 'Hide' } Email</button>
    </>
  );
};

export default Contact;
