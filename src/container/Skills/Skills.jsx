import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import ReactTooltip from "react-tooltip";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [expriences, setExpriences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => setSkills(data));

    client.fetch(query).then((data) => setExpriences(data));
  }, []);

  return (
    <Wrapper>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-containers">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name + index}
            >
              <div
                style={{ backgroundColor: skill.bgColor }}
                className="app__flex"
              >
                <img className="circle" src={urlFor(skill.icon)} alt="" />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp">
          {expriences?.map((experience) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience?.works?.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  flex-direction: column;

  .app__skills-containers {
    width: 80%;
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-inline: auto;

    @media (max-width: 900px) {
      width: 100%;
      flex-direction: column;
    }
  }
  .app__skills-list {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 5rem;
    @media (max-width: 900px) {
      margin-right: 0rem;
      justify-content: center;
      align-items: center;
    }
  }
  .app__skills-item {
    flex-direction: column;
    text-align: center;
    margin: 1rem;
    transition: all 0.3s ease-in-out;

    div {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: #fff;
      cursor: pointer;
      border: 2px solid transparent;
      transition: all 0.3s ease-in-out;
      img {
        width: 50%;
        height: 50%;
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        box-shadow: 0 0 25px #fef4f5;
        border: 2px solid hotpink;
        img {
          scale: 1.2;
        }
      }

      @media (min-width: 2000px) {
        width: 140px;
        height: 140px;
      }
      @media (max-width: 600px) {
        width: 60px;
        height: 60px;
        &:hover {
          img {
            scale: 1.1;
          }
        }
      }
    }
    p {
      font-weight: 500;
      margin-top: 0.5rem;
    }
    @media (min-width: 2000px) {
      margin: 0.9rem 1.8rem;
      margin-top: 0.9rem;
    }
  }

  .app__skills-exp {
    padding-top: 1rem;
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-inline: auto;
    @media (max-width: 900px) {
      margin-top: 2rem;
    }
  }

  .app__skills-exp-item {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1rem 0;
  }
  .app__skills-exp-year {
    margin-right: 3rem;
    p {
      font-weight: 700;
      color: var(--secondary-color);
    }
    @media (max-width: 450px) {
      margin-right: 1rem;
    }
  }

  .app__skills-exp-works {
    flex: 1;
    .app__skills-exp-work {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 1rem;
      cursor: pointer;
      h4 {
        font-weight: 500;
      }
      p {
        font-weight: 400;
        color: var(--gary-color);
        margin-top: 5px;
      }
    }
  }

  .skills-tooltip {
    max-width: 300px !important;
    background-color: var(--white-color) !important;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1) !important;
    border-radius: 5px !important;
    padding: 1rem !important;
    color: var(--gray-color) !important;
    text-align: center !important;
    line-height: 1.5 !important;
    opacity: 1 !important;

    @media screen and (min-width: 2000px) {
      font-size: 1.75rem !important;
      max-width: 500px !important;
      line-height: 2 !important;
    }
  }

  .circle {
    border-radius: 100vh;
  }
`;

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
