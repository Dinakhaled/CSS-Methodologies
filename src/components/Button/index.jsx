import React from "react";
import styles from "./button.module.scss";

const Button = ({ className = "" }) => {
  return (
    <button className={`${styles.button} ${styles[`${className}`]}`}>
      Click here
    </button>
  );
};

export default Button;
