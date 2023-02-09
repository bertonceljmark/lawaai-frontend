import { motion } from "framer-motion";
import React from "react";
const LoadingDot = {
  display: "block",
  width: "1rem",
  height: "1rem",
  backgroundColor: "white",
  borderRadius: "50%",
};

const LoadingContainer = {
  width: "5rem",
  height: "2.5rem",
  display: "flex",
  position: "fixed",
  bottom: 0,
  right: 20,
  justifyContent: "space-around",
};

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "100%",
  },
};

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};
const PageLoader = () => {
  return (
    <div
      style={{
        paddingTop: "5rem",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        zIndex: 9999,
      }}
    >
      <motion.div
        /* tslint:disable-next-line */
        style={LoadingContainer as React.CSSProperties}
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
      </motion.div>
    </div>
  );
};

export default PageLoader;
