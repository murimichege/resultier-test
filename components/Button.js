import { motion } from "framer-motion";
import React from "react";
import styles from "../styles/Play.module.css";



const Button =  ({
  classN,
  children,
  lid,
  onClicK = () => {},
}) => {
  return (
    <motion.div onClick={() => onClicK()} layoutId={lid} className={classN}>
      <div className={styles.inside}>{children}</div>
    </motion.div>
  );
};

export default Button;
