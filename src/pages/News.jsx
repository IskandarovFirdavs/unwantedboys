import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { newsData } from "../data/Data";

const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;
  padding: 4rem 0;
`;

const SectionHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.textDark};
  font-size: 3.2rem;
  font-weight: 700;

  span {
    color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ViewAll = styled.button`
  color: ${({ theme }) => theme.accent};
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ScrollContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  overflow: ${({ showAll }) => (showAll ? "visible" : "hidden")};
`;

const NewsGrid = styled.div`
  display: grid;
  grid-auto-flow: ${({ showAll }) => (showAll ? "row" : "column")};
  grid-template-columns: ${({ showAll }) =>
    showAll ? "repeat(auto-fill, minmax(300px, 1fr))" : "none"};
  grid-auto-columns: ${({ showAll }) => (showAll ? "none" : "300px")};
  gap: 2rem;
  overflow-x: ${({ showAll }) => (showAll ? "visible" : "auto")};
  scroll-snap-type: ${({ showAll }) => (showAll ? "none" : "x mandatory")};
  padding: 1rem;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    overflow-x: visible;
  }
`;

const NewsCard = styled.a`
  position: relative;
  height: 400px;
  border-radius: 1rem;
  overflow: hidden;
  scroll-snap-align: start;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);

    img {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const NewsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const NewsOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    transparent 100%
  );
  color: ${({ theme }) => theme.textLight};
`;

const NewsDate = styled.div`
  font-size: 1.4rem;
  opacity: 0.8;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NewsTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const NewsExcerpt = styled.p`
  font-size: 1.4rem;
  opacity: 0.8;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.backgroundDark};
  color: ${({ theme }) => theme.textLight};
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background: ${({ theme }) => theme.primary};
  }

  &.prev {
    left: 0;
  }

  &.next {
    right: 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

function News() {
  const [showAll, setShowAll] = useState(false);
  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setShowAll(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <PageContainer>
      <SectionHeader>
        <Title>
          So'nggi <span>yangiliklar</span>
        </Title>
        {!isMobile && (
          <ViewAll onClick={() => setShowAll(!showAll)}>
            {showAll ? "Kamroq ko'rish" : "Barchasini ko'rish"}
            {showAll ? <FaChevronLeft /> : <FaChevronRight />}
          </ViewAll>
        )}
      </SectionHeader>
      <ScrollContainer showAll={showAll}>
        {!showAll && !isMobile && (
          <>
            <ScrollButton className="prev" onClick={() => scroll("left")}>
              <FaChevronLeft />
            </ScrollButton>
            <ScrollButton className="next" onClick={() => scroll("right")}>
              <FaChevronRight />
            </ScrollButton>
          </>
        )}
        <NewsGrid ref={scrollContainerRef} showAll={showAll || isMobile}>
          {newsData.map((news, index) => (
            <NewsCard key={index} target="blank" href={news.url}>
              <NewsImage src={news.image} alt={news.title} />
              <NewsOverlay>
                <NewsDate>{news.date}</NewsDate>
                <NewsTitle>{news.title}</NewsTitle>
                <NewsExcerpt>{news.summary}</NewsExcerpt>
              </NewsOverlay>
            </NewsCard>
          ))}
        </NewsGrid>
      </ScrollContainer>
    </PageContainer>
  );
}

export default News;
