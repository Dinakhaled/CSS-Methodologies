import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    color: "green",
    padding: {
      top: 10,
      right: 15,
      bottom: 10,
      left: 15,
    },
    "&.primary": {
      backgroundColor: "#000",
      color: "#fff",
      fontSize: (props) => props.fontSize,
    },
  },
});

const Button = ({ className = "", ...props }) => {
  const classes = useStyles(props);
  return (
    <button className={`${classes.button} ${className}`}>Click here</button>
  );
};

Button.defaultProps = {
  fontSize: "80px",
};

export default Button;
