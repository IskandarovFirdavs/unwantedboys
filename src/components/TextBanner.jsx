import React from "react";
import styled, { keyframes } from "styled-components";

// Rang o'zgarishi uchun animatsiya
const textSlide = keyframes`
  0% {
    transform: translateX(-100%); /* Start from the left, out of view */
    color: #10106f;
  }
  50% {
    transform: translateX(0); /* Center the text */
    color: ${({ theme }) => theme.h1};
  }
  100% {
    transform: translateX(100%); /* Move out to the right */
    color: #ff3366;
  }
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px; /* Add some padding for smaller screens */
  overflow: hidden; /* Prevent content from going outside */
`;

const LogoText = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.accent};
  letter-spacing: 0.7em;
  text-transform: uppercase;
  text-align: center;
  transition: color 0.7s ease, transform 0.7s ease;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  animation: ${textSlide} 6s linear infinite; /* Infinite loop of the animation */

  span {
    color: ${({ theme }) => theme.secondary};
  }

  /* Mobile view adjustments */
  @media (max-width: 480px) {
    font-size: 2.5rem;
    letter-spacing: 0;
  }

  /* Tablet view adjustments */
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 3rem;
    letter-spacing: 0;
  }

  /* Laptop and larger screens */
  @media (min-width: 768px) {
    letter-spacing: 0;
    font-size: 4rem;
  }

  @media (min-width: 1024px) {
    letter-spacing: 0;
    font-size: 5rem;
  }

  @media (min-width: 1200px) {
    letter-spacing: 0.7em;
    font-size: 6rem;
  }
`;

const TextBanner = () => {
  return (
    <LogoWrapper>
      <LogoText>
        FC <span>UNWANTED</span> BOYS
      </LogoText>
    </LogoWrapper>
  );
};

export default TextBanner;
