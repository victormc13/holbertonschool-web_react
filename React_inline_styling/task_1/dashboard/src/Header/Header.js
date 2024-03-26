import React from "react";
import hlogo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 'calc(10px + 2vmin)',
    color: '#e0354b',
    width: '100%'
  },
  logo: {
    height: '40vmin'
  }
})

const Header = () => {
  return (
    <div className={css(styles.header)}>
      <img src={hlogo} className={css(styles.logo)} alt="holberton logo" />
      <h1>School dashboard</h1>
    </div>
  );
};

export default Header;