import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import { ChevronLeft, ChevronRight } from "react-feather";

function Testimonial() {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(brandsQuery).then((data) => setBrands(data));

    client.fetch(query).then((data) => setTestimonials(data));
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Wrapper>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(currentTestimonial.imgurl)} alt="" />
            <div className="app__testimonial-content">
              <p className="p-text line-wrap-5">
                {currentTestimonial.feedback}
              </p>
              <div>
                <h4 className="bold-text">{currentTestimonial.name}</h4>
                <h5 className="p-text">{currentTestimonial.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <ChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <ChevronRight />
            </div>
          </div>
        </>
      )}
      <div className="app__testimonials-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand.id}
          >
            <img src={urlFor(brand.imgUrl)} alt="" />
          </motion.div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .app__testimonials {
    flex: 1;
    width: 100%;
    flex-direction: column;
  }
  .app__testimonial-item {
    width: 60%;
    min-height: 320px;
    background-color: var(--white-color);
    display: flex;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 30px rgba(0 0 0 /0.1);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      background-color: #f9fcff;
    }

    img {
      width: 100px;
      height: 100px;
      border-radius: 100vh;
      object-fit: cover;
      transition: all 0.3s ease-in-out;

      &:hover {
        scale: 1.1;
      }
    }
    @media (min-width: 2000px) {
      min-height: 450px;
      img {
        width: 150px;
        height: 150px;
      }
    }
    @media (max-width: 850px) {
      width: 100%;
    }
    @media (max-width: 600px) {
      flex-direction: column;
    }
  }

  .app__testimonial-content {
    flex: 1;
    height: 100%;
    padding: 0 2rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    margin-top: 1rem;

    p {
      font-size: 1.125rem;
      line-height: 2rem;
      color: var(--black-color);
      font-family: var(--font-base);
    }
    h4 {
      font-weight: 600;
      margin-top: 2rem;
      color: var(--sacondary-color);
    }
    h5 {
      color: var(--gray-color);
      margin-top: 5px;
    }
  }

  .app__testimonial-btns {
    flex-direction: row;
    margin-top: 1rem;
    div {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: var(--white-color);
      margin: 1rem;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      svg {
        width: 25px;
        height: 25px;
        color: var(--secondary-color);
        transition: all 0.3s ease-in-out;
      }
      &:hover {
        background-color: var(--secondary-color);
        svg {
          color: var(--white-color);
        }
      }
    }
  }

  .app__testimonials-brands {
    width: 80%;
    flex-wrap: wrap;
    margin-top: 1.5rem;

    div {
      width: 130px;
      margin: 1.5rem;
      cursor: pointer;
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
        filter: grayscale(1);
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        img {
          filter: grayscale(0);
        }
      }

      @media (min-width: 2000px) {
        width: 210px;
        margin: 2rem;
      }
      @media (max-width: 450px) {
        width: 120px;
        margin: 1rem;
      }
    }
    @media (max-width: 800px) {
      width: 100%;
    }
  }

  .app__flex {
    margin-inline: auto;
  }
`;

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
