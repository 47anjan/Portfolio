import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import { Eye, GitHub } from "react-feather";

function Work() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({
    y: 0,
    opacity: 1,
  });

  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <Wrapper>
      <h2 className="head-text">
        My Creative <span>Projects</span> Section
      </h2>
      <div className="app__work-filter">
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div key={index} className="app__work-item app__flex">
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt="" />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferr">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <Eye />
                  </motion.div>
                </a>

                <a href={work.codeLink} target="_blank" rel="noreferr">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <GitHub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text line-wrap-1">{work.title}</h4>
              <p style={{ marginTop: 10 }} className="p-text line-wrap-1">
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text"> {work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  flex-direction: column;
  .app__work-filter {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 4rem 0 2rem;

    .app__work-filter-item {
      padding: 0.5rem 1rem;
      border-radius: 4px;
      background-color: #fff;
      color: #000;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
      margin: 0.5rem;

      &:hover {
        background-color: var(--secondary-color);
        color: #fff;
      }

      @media (min-width: 2000px) {
        padding: 1rem 2rem;
        border-radius: 8px;
      }
    }

    .item-active {
      background-color: var(--secondary-color);
      color: #fff;
    }
  }
  .app__work-portfolio {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .app__work-item {
    width: 270px;
    display: flex;
    flex-direction: column;
    margin: 2rem;
    padding: 1rem;
    border-radius: 8px;
    background-color: #fff;
    color: black;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 0 25px rgba(0 0 0 / 0.2);
    }
    @media (min-width: 2000px) {
      width: 470px;
      padding: 1.25rem;
      border-radius: 12px;
    }
    @media (max-width: 300px) {
      width: 100%;
      padding: 1rem;
    }
  }
  .app__work-img {
    height: 230px;
    width: 100%;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
    @media (min-width: 2000px) {
      height: 350px;
    }
  }
  .app__work-hover {
    position: absolute;
    inset: 0 0 0 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0 0 0 / 0.5);
    border-radius: 8px;
    opacity: 0;
    transition: all 0.3s ease;
    display: flex;
    gap: 1rem;

    div {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgba(0 0 0 / 0.5);
      color: white;
      font-family: var(--font-base);
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
      svg {
        width: 50%;
        width: 50%;
        color: var(--white-color);
      }
    }
  }

  .app__work-content {
    padding: 0.5rem;
    width: 100%;
    position: relative;
    flex-direction: column;
    .p-text {
      text-align: center;
    }
    h4 {
      margin-top: 1rem;
      line-height: 1.5;
    }
    .app__work-tag {
      position: absolute;
      padding: 0.3rem 1rem;
      border-radius: 6px;
      background-color: #fff;
      top: -25px;
    }
  }
`;

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
