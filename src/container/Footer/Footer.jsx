import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import styled from "styled-components";
import { concat } from "lodash";
import { motion } from "framer-motion";
const Footer = () => {
  const [formData, setFormData] = useState({
    name: " ",
    email: "",
    massage: "",
  });
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [loding, setlLoding] = useState(false);

  const { name, email, massage } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setlLoding(true);
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      massage: massage,
    };

    client.create(contact).then(() => {
      setlLoding(false);
      setIsFormSubmited(true);
    });
  };

  return (
    <Wrapper>
      <h2 className="head-text">Take a coffe & chat with me</h2>

      <motion.div
        whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
        transition={{ duration: 0.5 }}
        className="app__footer-cards"
      >
        <a href="mailto:anjankarmakar15@gmail.com" className="app__footer-card">
          <img className="mr-1" src={images.email} alt="" />
          <p className="p-text">anjankarmakar15@gmail.com</p>
        </a>
        <a href="tel:+880 (123) 456-789" className="app__footer-card">
          <img src={images.mobile} alt="" />
          <p className="p-text">+880 (123) 456-789</p>
        </a>
      </motion.div>

      {!isFormSubmited ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              name="name"
              type="text"
              className="p-text"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              name="email"
              type="email"
              className="p-text"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Massage"
              name="massage"
              id="massage"
              value={massage}
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loding ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  .app__footer {
    flex: 1;
    width: 100%;
    flex-direction: column;
  }
  .app__footer-cards {
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin: 4rem 2rem 2rem;
    margin-inline: auto;

    .app__footer-card:last-child {
      background-color: #f8f3f4;
    }
  }

  .app__footer-card {
    min-width: 290px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 8px;
    cursor: pointer;
    background-color: #fde6e9;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    border: 3px solid transparent;
    overflow: hidden;
    .mr-1 {
      margin-right: 1rem;
    }

    img {
      width: 40px;
      height: 40px;
      margin-inline: 0.7rem;
    }
    p {
      font-weight: 500;
    }

    &:hover,
    &:focus {
      border-color: deeppink;
    }
    @media (max-width: 450px) {
      border-color: deeppink;
      width: 100%;
    }
  }
  @media (max-width: 450px) {
    width: 100%;
  }
  .app__footer-form {
    width: 60%;
    flex-direction: column;
    margin: 1rem 2rem;
    margin-inline: auto;

    div {
      width: 100%;
      margin: 0.75rem 0;
      border-radius: 8px;
      cursor: pointer;
      background-color: var(--primary-color);
      transition: all 0.3s ease-in-out;

      input,
      textarea {
        width: 100%;
        padding: 0.95rem;
        border: 0;
        border-radius: 4px;
        background-color: var(--primary-color);

        font-family: var(--font-base);
        color: var(--secondary-color);
        outline: none;
      }
      textarea {
        height: 170px;
      }

      &:hover {
        box-shadow: 0 0 25px var(--primary-color);
      }
    }
    button {
      width: 100%;
      padding: 0.75rem 2rem;
      border-radius: 4px;
      border: 0;
      cursor: pointer;
      text-align: center;
      background: var(--secondary-color);
      color: white;
      font-size: 1rem;
      font-weight: 500;
      transition: all 0.3s ease-in-out;
      outline: 0;
      margin-top: 1.5rem;
      font-family: var(--font-base);

      &:hover {
        background: #8c4bff;
      }
    }
    @media (max-width: 768px) {
      width: 100%;
      margin: 1rem 0;
    }
  }
`;

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
