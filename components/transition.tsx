import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Transition = ({ children }) => {
  const [count, setCount] = useState(0);
  const { asPath } = useRouter();

  useEffect(() => {
    setCount(count + 1);
  }, [asPath]);

  let variants = {
    inactive: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    out: {},
    in: {},
  };

  const downUp = {
    out: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    in: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const upDown = {
    out: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    in: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const leftRight = {
    out: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    in: {
      x: 100,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const rightLeft = {
    out: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    in: {
      x: -100,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  switch (count % 4) {
    case 0:
      variants.out = downUp.out;
      variants.in = downUp.in;
      break;
    case 1:
      variants.out = upDown.out;
      variants.in = upDown.in;
      break;
    case 2:
      variants.out = leftRight.out;
      variants.in = leftRight.in;
      break;
    case 3:
      variants.out = rightLeft.out;
      variants.in = rightLeft.in;
      break;
    default:
      variants.out = downUp.out;
      variants.in = downUp.in;
  }

  return (
    <div className="effect-1">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={asPath}
          variants={variants}
          initial="in"
          animate="inactive"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
