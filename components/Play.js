import { motion,AnimatePresence } from "framer-motion";
import React from "react";
import styles from "../styles/Play.module.css";
import PlayButtons from "./PlayButtons";



export const Play = ({
  advanced,
  setselected,
}) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{
        scale: 0,
        opacity: 0,
        transition: { duration: 0.2 },
      }}
      className={styles.container}
    >
      {advanced ? (
        <img src="/bg-pentagon.svg" />
      ) : (
        <img src="/bg-triangle.svg" />
      )}
      <PlayButtons
        onCLick={(value) => setselected(value)}
        advanced={advanced}
      />
    </motion.div>
  );
};
