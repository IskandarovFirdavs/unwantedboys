import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { homeData } from "../data/Data";
import banner from "../assets/img/hero.jpg";
const HomeContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  position: relative;
  height: 80vh;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(24, 23, 51, 0.8) 0%,
      rgba(24, 23, 51, 0.6) 100%
    );
  }
`;

const HeroContent = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  color: ${({ theme }) => theme.textLight};
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 2rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled.p`
  font-size: 2rem;
  max-width: 600px;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.backgroundDark};
  padding: 1.5rem 3rem;
  border-radius: 5px;
  font-size: 1.8rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.textLight};
    transform: translateY(-2px);
  }
`;

const FeaturesSection = styled.section`
  background: ${({ theme }) => theme.backgroundAlt};
  padding: 8rem 2rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 6rem;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const FeatureGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
`;

const FeatureCard = styled.div`
  background: ${({ theme }) => theme.background};
  border-radius: 10px;
  padding: 3rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.textMuted};
  line-height: 1.6;
`;

function Home() {
  return (
    <HomeContainer>
      <HeroSection bgImage={banner}>
        <HeroContent>
          <Title>{homeData.title}</Title>
          <Subtitle>{homeData.subtitle}</Subtitle>
          <CTAButton to="/matches">
            O'yinlarni ko'rish
            <FaArrowRight />
          </CTAButton>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle>{homeData.featuresTitle}</SectionTitle>
        <FeatureGrid>
          {homeData.features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </FeaturesSection>
    </HomeContainer>
  );
}

export default Home;
