import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { images } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function Header() {
  return (
    <Wrapper>
      <header id="home" className="app__flex app__header">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">Hello, I am</p>
                <p className="head-text">Anjan</p>
              </div>
            </div>
            <div className="tag-cmp app__flex">
              <p className="p-text">Frontend Web Developer</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="app__header-img"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
          <img className="header-img" src={images.avatar} alt="" />
          <motion.img
            className="overlay_circle"
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={images.circle}
          />
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.javascript, images.react, images.css].map((image, index) => (
            <div key={`circle-${index}`} className="cricle-cmp app__flex">
              <img src={image} alt="" />
            </div>
          ))}
        </motion.div>
      </header>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  #home {
    position: relative;

    background-size: cover;
    background-position: center;
    .app_wrapper {
      padding: 0;
      .copuright {
        display: none;
      }
    }
  }

  .app__header {
    flex: 1;
    width: 100%;
    height: 100%;
    flex-direction: row;
    padding: 6rem 2rem 0;
    gap: 2rem;

    @media (min-width: 2000px) {
      padding-top: 8rem;
    }
    @media (max-width: 1024px) {
      flex-direction: column;
      gap: 0rem;
    }
    @media (max-width: 450px) {
      padding-top: 6rem 1rem 2rem;
    }
  }

  .app__header-info {
    flex: 0.65;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;

    @media (max-width: 2000px) {
      width: 100%;
      margin-right: 0rem;
    }
  }
  .app__header-badge {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;

    .badge-cmp,
    .tag-cmp {
      padding: 1rem 2rem;
      border: var(--white-color);
      border-radius: 15px;
      flex-direction: row;
      width: auto;
      box-shadow: 0 0 20px rgb(0 0 0 / 0.1);
    }
    .tag-cmp {
      flex-direction: column;
      margin-top: 3rem;
      p {
        width: 100%;
        text-transform: uppercase;
        text-align: right;
      }
    }
    span {
      font-size: 2.5rem;
      @media (min-width: 2000px) {
        font-size: 5rem;
      }
    }

    @media (max-width: 1200px) {
      font-size: 5rem;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  .app__header-circles {
    flex: 0.75;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 100%;
    margin-right: -25px;

    div {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: var(--white-color);
      box-shadow: 0 0 20px rgb(0 0 0 / 0.1);

      img {
        width: 60%;
        height: 60%;
      }
    }
    div:nth-child(1) {
      width: 100px;
      height: 100px;
    }
    div:nth-child(2) {
      width: 140px;
      height: 140px;
      margin: 1.75rem;
    }
    div:nth-child(3) {
      width: 70px;
      height: 70px;
    }

    @media (min-width: 2000px) {
      div:nth-child(1) {
        width: 300px;
        height: 300px;
      }
      div:nth-child(2) {
        width: 150px;
        height: 150px;
      }
      div:nth-child(3) {
        width: 170px;
        height: 170px;
      }
    }

    @media (max-width: 1200px) {
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;
      margin-left: 0;

      div {
        margin: 1rem;
      }
    }

    @media (max-width: 495px) {
      div:nth-child(1) {
        width: 60px;
        height: 60px;
      }
      div:nth-child(2) {
        width: 80px;
        height: 80px;
        margin: 1.75rem;
      }
      div:nth-child(3) {
        width: 50px;
        height: 50px;
      }
    }
    @media (max-width: 1024px) {
      margin-top: 25px;
    }
  }

  .app__header-img {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-width: 300px;

    img {
      width: 100%;
      object-fit: contain;
      z-index: 1;
    }

    .header-img {
      position: relative;
      right: -15px;
      top: -5px;
      filter: drop-shadow(2px 4px 6px rgb(0 0 0 /0.25));
    }
    .overlay_circle {
      position: absolute;
      z-index: 0;
      width: 113%;
      height: 100%;
      left: -2%;
      bottom: 0px;
      border-radius: 100vh;
      align-self: center;
    }

    @media screen and (max-width: 1200px) {
      margin: 2rem 0;
      bottom: -52px;
    }
  }
`;

export default AppWrap(Header, "home");
