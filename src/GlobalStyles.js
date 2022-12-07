import { createGlobalStyle } from "styled-components/macro";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");

:root {
  --font-base: "Roboto", sans-serif;

  --primary-color: #edf2f8;
  --secondary-color: #313bac;
  --black-color: #030303;
  --lightGray-color: #e4e4e4;
  --gray-color: #6b7688;
  --brown-color: #46364a;
  --white-color: #ffffff;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}


.app {
  background-color: var(--primary-color);
  font-family: var(--font-base);
}

.app__whitebg {
  background-color: var(--white-color);
}

.app__primarybg {
  background-color: var(--primary-color);
}

.app__container {
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: row;
}

.app__flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.app__wrapper {
  flex: 1;
  width: 100%;
  flex-direction: column;
  padding: 4rem 2rem;

  @media screen and (max-width: 450px) {
    padding: 4rem 1rem 2rem;
  }
}



.head-text {
  font-size: 2.75rem;
  font-weight: 800;
  text-align: center;
  color: var(--black-color);
  text-transform: capitalize;

  span {
    color: var(--secondary-color);
  }

  @media screen and (min-width: 2000px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 2rem;
  }
}

.p-text {
  font-size: 0.8rem;
  text-align: left;
  color: var(--gray-color);
  line-height: 1.5;

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
  }
}

.bold-text {
  font-size: 1rem;
  font-weight: 800;
  color: var(--black-color);
  text-align: left;

  @media screen and (min-width: 2000px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 0.9rem;
  }
}

.line-wrap-1 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }

  .line-wrap-5 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
  }







`;

export default GlobalStyles;
