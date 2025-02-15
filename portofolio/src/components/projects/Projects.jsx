import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Nike Basketball Clone Web App",
    img: "./nikeWeb.png",
    description:
      "A clone of the Nike Basketball website. The app allows users to sign up, log in, and add items to their wishlist.",
    link: "https://nike-dimashadin.vercel.app/",
  },
  {
    id: 2,
    title: "Zoo Tamagotchi Game",
    img: "./ragunanOnline.png",
    description:
      "A virtual pet game where users can adopt and take care of animals. ",
    link: "",
  },
  {
    id: 3,
    title: "Digital Recipe with AI",
    img: "./digitalRecipe.png",
    description:
      "A recipe app that allows users to search for recipes, AI-generated recipes, and can buy book of recipes.",
    link: "",
  },
  {
    id: 4,
    title: "Maneka",
    img: "./manekaLogo.png",
    description:
      "An AI-powered career planning app that helps users identify their unique strengths based on Howard Gardner's Theory of Multiple Intelligences.",
    link: "",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.link}>
              <button>See Detail</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>

      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
