import React from "react";
import styled from "styled-components";
import { NavigationDots, SocialMedia } from "../components";
import Header from "../container/Header/Header";

const AppWrap = (Component, idName, className) =>
  function HOC() {
    return (
      <Wrapper>
        <div id={idName} className={`app__container ${className}`}>
          <SocialMedia />

          <div className="app__wrapper app__flex">
            <Component />
            {/* <div className="cpoyright">
              <p className="p-text">@2022 ANJAN</p>
              <p className="p-text">All right reserved</p>
            </div> */}
          </div>
          <NavigationDots active={idName} />
        </div>
      </Wrapper>
    );
  };

const Wrapper = styled.div`
  /* .copyright {
    width: 100%;
    padding: 2rem 0 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    p {
      text-transform: uppercase;
      color: var(--black-color);
    }
  } */
`;

export default AppWrap;
