import React, { useState } from "react";
import styled from "styled-components";
import { images } from "../../constants";

import { Menu, X } from "react-feather";
import { motion } from "framer-motion";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Wrapper>
      <div className="app__navbar_logo">
        <a href="/">Anjan</a>
        <a className="revealed" href="/">
          Anjan
        </a>
      </div>
      <ul className="app__navbar_links">
        {["home", "about", "work", "skills", "testimonial", "contact"].map(
          (item) => (
            <li
              className="app__flex p-text app__navbar_item"
              key={`link-${item}`}
            >
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>
      <div className="app__navbar-menu">
        <Menu className="menu" onClick={() => setToggle(true)} />
        {/* {toggle && ( */}
        <motion.div
          className={toggle ? "active" : ""}
          // whileInView={{ x: [300, 0] }}
          // transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <X size={30} className="exit" onClick={() => setToggle(false)} />

          <ul>
            {["home", "about", "work", "skills", "testimonial", "contact"].map(
              (item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>
        {/* )} */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgb(255 255 255 / 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgb(255 255 255 / 0.18);
  position: fixed;
  top: 0;
  z-index: 2;

  .app__navbar_logo {
    position: relative;
    a {
      font-size: 1.9rem;
      font-weight: 800;
      text-decoration: none;
      color: #222;
      font-family: poppins;
      display: block;
      line-height: 1.1;
    }
    .revealed {
      color: deeppink;
      position: absolute;
      top: 0;
      left: 0;
      filter: drop-shadow(0px 0px 4px white);
      clip-path: polygon(
        -1.06% 108.97%,
        101.06% 117.95%,
        103.17% 108.97%,
        0% 105.98%
      );
      transition: clip-path 1000ms;
    }

    &:hover {
      .revealed {
        clip-path: polygon(0% 0%, 100% 0%, 100% 111.96%, -2.11% 108.97%);
        transition: clip-path 300ms;
      }
    }
  }

  .app__navbar_links {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .app__navbar_item {
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        background-color: var(--secondary-color);
        width: 0%;
        height: 2px;
        bottom: -2px;
        transition: all 0.2s ease-in-out;
      }

      &:hover::after {
        width: 100%;
      }
    }
    li {
      margin: 0 1rem;
      cursor: pointer;
      flex-direction: column;
      position: relative;

      a {
        color: var(--gray-color);
        text-decoration: none;
        flex-direction: column;
        text-transform: uppercase;
        font-weight: 500;
        transition: all 0.2s ease-in-out;
        &:hover {
          color: var(--secondary-color);
        }
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .app__navbar-menu {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: var(--secondary-color);
    div {
      position: fixed;
      top: 0px;
      bottom: 0px;
      right: 0px;
      left: 0px;
      z-index: 5;
      padding: 1rem;

      margin: 15px 20px 20px 20px;
      width: 0%;
      height: 0vh;
      border-radius: 20px;
      background-color: white;
      opacity: 0;

      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex-direction: column;

      color: var(--white-color);
      background-size: cover;
      background-repeat: repeat;
      background-color: white;

      transition: all 0.3s ease-in-out;

      box-shadow: 0 0 20px rgba(168 168 168 / 0.15);

      .exit {
        color: var(--secondary-color);
        margin: 0.5rem 1rem;
        cursor: pointer;
        margin-top: -3px;
        margin-right: -2px;
      }
      ul {
        margin-top: -10px;
        list-style: none;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        li {
          transition: all 0.2s ease-in-out;
          width: 95%;
          padding: 1rem;
          border-radius: 4px;

          &:hover,
          &:focus {
            background-color: #edf2f8;
          }
        }
        a {
          text-decoration: none;
          color: var(--gray-color);
          font-size: 1rem;
          text-transform: uppercase;
          font-weight: 500;
          transition: all 0.2s ease-in-out;
          &:hover {
            color: var(--secondary-color);
          }
        }
      }
    }
    .menu {
      cursor: pointer;
    }
    @media (min-width: 768px) {
      display: none;
    }
    .active {
      width: 95%;
      height: 95vh;
      opacity: 1;

      @media (max-width: 480px) {
        width: 92%;
      }
    }
  }
`;

export default Navbar;
