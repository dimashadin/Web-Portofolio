import { useRef } from "react";
import "./certificates.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [

  {
    id: 1,
    title: "Hacktiv8 Fullstack Javascript Program",
    img: "./sertifHCK.png",
    description:
      "Graduated in February 2025 with a score of 92/100",
    link: "",
  },
  {
    id: 2,
    title: "React (Basic)",
    img: "./React.png",
    description:
      "Issued by HackerRank in February 2025",
    link: "",
  },
  {
    id: 3,
    title: "CSS (Basic)",
    img: "./CSS.png",
    description:
      "Issued by HackerRank in February 2025",
    link: "",
  },
  {
    id: 4,
    title: "Problem Solving (Basic)",
    img: "./ProblemSolving.png",
    description:
      "Issued by HackerRank in February 2025",
    link: "",
  },
  {
    id: 5,
    title: "Javascript (Basic)",
    img: "./Javascript.png",
    description:
      "Issued by HackerRank in February 2025",
    link: "",
  },
  {
    id: 6,
    title: "Sql (Basic)",
    img: "./Sql.png",
    description:
      "Issued by HackerRank in February 2025",
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

const Certificates = () => {
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
        <h1>Certificates</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>

      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Certificates;
