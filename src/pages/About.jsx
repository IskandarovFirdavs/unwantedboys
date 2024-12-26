import React from "react";
import styled from "styled-components";
import { aboutData } from "../data/Data";

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 3rem 1rem;
  max-height: 80vh;
`;

const AboutContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

const Author = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: #888888;
  text-align: right;
`;

function About() {
  return (
    <AboutWrapper>
      {aboutData.map((par, index) => (
        <AboutContainer key={index}>
          <Title>{par.title}</Title>
          <Paragraph>{par.paraf}</Paragraph>
          <Paragraph>{par.paras}</Paragraph>
          <Paragraph>{par.parat}</Paragraph>
          <Author>{par.author}</Author>
        </AboutContainer>
      ))}
    </AboutWrapper>
  );
}

export default About;
