import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  loginInput: {
    display: 'flex',
    gap: '1rem',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
    },
  },
  loginInputButton: {
    backgroundColor: 'white',
    color: 'black',
    border: '2px solid #e7e7e7;',
    borderRadius: '8px',
    cursor: 'pointer',
    '@media (max-width: 900px)': {
      width: '50px',
      borderRadius: '4px',
    },
  },
  input: {
    marginLeft: '20px',
  },
});

const Login = () => {
  const handleLabelClick = (event) => {
    document.getElementById(event.target.htmlFor);
  };

  return (
    <>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.loginInput)}>
        <label htmlFor="email" onClick={handleLabelClick}>
          Email:
          <input type="email" id="email" className={css(styles.input)} />
        </label>
        <label htmlFor="password" onClick={handleLabelClick}>
          Password:
          <input type="passwrod" id="password" className={css(styles.input)} />
        </label>
        <button type="button" className={css(styles.loginInputButton)}>
          OK
        </button>
      </div>
    </>
  );
};

export default Login;
