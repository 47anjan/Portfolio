import React from "react";
import styled from "styled-components";

const NavigationDots = ({ active }) => {
  return (
    <Wrapper>
      {["home", "about", "work", "skills", "testimonial", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            style={active === item ? { backgroundColor: "#313bac" } : {}}
            className="app__navigation-dot"
          />
        )
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-right: 1rem;

  .app__navigation-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #cbcbcb;
    margin: 0.5rem;

    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: var(--secondary-color);
    }

    @media screen and (min-width: 2000px) {
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export default NavigationDots;
