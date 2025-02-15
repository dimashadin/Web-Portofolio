import { useRef } from "react";
import "./skills.scss";
import { useInView, motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const ref = useRef();

  const inView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      //   animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I am a web developer specializing
          <br /> in creating user-friendly websites.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>My</motion.b> Skills
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>FrontEnd</h2>
          <p>
            HTML CSS JavaScript TypeScript React.js Next.js React Native Vite
            Tailwind CSS Bootstrap Apollo Client Jest GraphQL REST API
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>FrontEnd</h2>
          <p>
            HTML CSS JavaScript TypeScript React.js Next.js React Native Vite
            Tailwind CSS Bootstrap Apollo Client Jest GraphQL REST API
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>FrontEnd</h2>
          <p>
            HTML CSS JavaScript TypeScript React.js Next.js React Native Vite
            Tailwind CSS Bootstrap Apollo Client Jest GraphQL REST API
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>FrontEnd</h2>
          <p>
            HTML CSS JavaScript TypeScript React.js Next.js React Native Vite
            Tailwind CSS Bootstrap Apollo Client Jest GraphQL REST API
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
