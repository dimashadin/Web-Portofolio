import { motion } from "framer-motion";
import "./hero.scss";

const slideVariants = {
  initial: {
    x: 0,
  
  },
  animate: {
    x: "-200%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
      
    },
  },
 
};
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity,
    }
  }
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Dimas Hadi Nogoro</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer and Fullstack Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
           <a href="#Projects"><motion.button variants={textVariants}>
              See the latest projects
            </motion.button></a> 
           <a href="#Contact"> <motion.button variants={textVariants}>Contact Me</motion.button></a>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={slideVariants} initial="initial" animate="animate"> 
        Fullstack Developer FrontEnd Developer Web Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
