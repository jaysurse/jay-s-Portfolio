import React from "react";
import styled from "styled-components";

export default function Loader() {
  return (
    <Overlay>
      <StyledWrapper>
        <div>
          <div className="loader">
            <span>
              <span />
              <span />
              <span />
              <span />
            </span>
            <div className="base">
              <span />
              <div className="face" />
            </div>
          </div>
          <div className="longfazers">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </StyledWrapper>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.4);
`;

const StyledWrapper = styled.div`
  .loader {
    position: relative;
    animation: speeder 0.4s linear infinite;
  }

  .loader > span {
    height: 5px;
    width: 35px;
    background: #000;
    position: absolute;
    top: -19px;
    left: 60px;
    border-radius: 2px 10px 1px 0;
  }

  .base span {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-right: 100px solid #000;
    border-bottom: 6px solid transparent;
  }

  .base span::before {
    content: "";
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background: #000;
    position: absolute;
    right: -110px;
    top: -16px;
  }

  .base span::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 0 solid transparent;
    border-right: 55px solid #000;
    border-bottom: 16px solid transparent;
    top: -16px;
    right: -98px;
  }

  .face {
    position: absolute;
    height: 12px;
    width: 20px;
    background: #000;
    border-radius: 20px 20px 0 0;
    transform: rotate(-40deg);
    right: -125px;
    top: -15px;
  }

  .face::after {
    content: "";
    height: 12px;
    width: 12px;
    background: #000;
    position: absolute;
    right: 4px;
    top: 7px;
    transform: rotate(40deg);
    transform-origin: 50% 50%;
    border-radius: 0 0 0 2px;
  }

  .loader > span > span {
    width: 30px;
    height: 1px;
    background: #000;
    position: absolute;
  }

  .loader > span > span:nth-child(1) {
    animation: fazer1 0.2s linear infinite;
  }

  .loader > span > span:nth-child(2) {
    top: 3px;
    animation: fazer2 0.4s linear infinite;
  }

  .loader > span > span:nth-child(3) {
    top: 1px;
    animation: fazer3 0.4s linear infinite;
    animation-delay: -1s;
  }

  .loader > span > span:nth-child(4) {
    top: 4px;
    animation: fazer4 1s linear infinite;
    animation-delay: -1s;
  }

  @keyframes fazer1 {
    0% {
      left: 0;
    }
    100% {
      left: -80px;
      opacity: 0;
    }
  }

  @keyframes fazer2 {
    0% {
      left: 0;
    }
    100% {
      left: -100px;
      opacity: 0;
    }
  }

  @keyframes fazer3 {
    0% {
      left: 0;
    }
    100% {
      left: -50px;
      opacity: 0;
    }
  }

  @keyframes fazer4 {
    0% {
      left: 0;
    }
    100% {
      left: -150px;
      opacity: 0;
    }
  }

  @keyframes speeder {
    0% {
      transform: translate(2px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -3px) rotate(-1deg);
    }
    20% {
      transform: translate(-2px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 3px) rotate(-1deg);
    }
    60% {
      transform: translate(-1px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-2px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(2px, 1px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }

  .longfazers {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .longfazers span {
    position: absolute;
    height: 2px;
    width: 20%;
    background: #000;
  }

  .longfazers span:nth-child(1) {
    top: 20%;
    animation: lf 0.6s linear infinite;
    animation-delay: -5s;
  }

  .longfazers span:nth-child(2) {
    top: 40%;
    animation: lf 0.8s linear infinite;
    animation-delay: -1s;
  }

  .longfazers span:nth-child(3) {
    top: 60%;
    animation: lfshort 0.6s linear infinite;
  }

  .longfazers span:nth-child(4) {
    top: 80%;
    animation: lfshort 0.5s linear infinite;
    animation-delay: -3s;
  }

  @keyframes lf {
    0% {
      left: 200%;
    }
    100% {
      left: -200%;
      opacity: 0;
    }
  }

  @keyframes lfshort {
    0% {
      left: 200%;
    }
    100% {
      left: -100%;
      opacity: 0;
    }
  }
`;
