import PropTypes from "prop-types";
import styles from "./Button.module.css";
import { useState, useEffect } from "react";

function Button({ text }) {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((current) => current + 1);
  console.log("render");
  useEffect(() => {
    console.log("counter changed");
  }, [counter]);
  return (
    <button onClick={onClick} className={styles.btn}>
      {counter}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
