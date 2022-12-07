import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = "*[_type== 'abouts']";
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <Wrapper>
      <section>
        <h2 className="head-text">
          I Know That<span> Good Skills</span>
          <br />
          means <span> More Opotunites</span>
        </h2>
        <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt="" />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .app__about {
    flex: 1;
    width: 100%;
    flex-direction: column;
  }
  div {
  }
  .app__profiles {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
  }
  .app__profile-item {
    width: 190px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin: 2rem;
    cursor: pointer;
    img {
      width: 100%;
      height: 170px;
      border-radius: 15px;
      object-fit: cover;
    }
    @media (min-width: 2000px) {
      width: 370px;
      margin: 2rem 4rem;
      img {
        height: 320px;
      }
    }
  }
`;

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
