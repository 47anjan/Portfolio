import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const MotionWrap = (Component, classNames) =>
  function HOC() {
    return (
      <Wrapper
        whileInView={{
          y: [100, 50, 0],
          opacity: [0, 0, 1],
        }}
        transition={{ duration: 0.8 }}
        className={`${classNames} app__flex`}
      >
        <Component />
      </Wrapper>
    );
  };

const Wrapper = styled(motion.div)`
  width: 100%;
`;

export default MotionWrap;
