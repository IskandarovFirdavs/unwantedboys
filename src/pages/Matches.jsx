import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { matchesData } from "../data/Data";

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
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #a50044;
  display: flex;
  gap: 0.5rem;

  span {
    color: #ffa726;
  }
`;

const ViewAll = styled.button`
  background: none;
  border: none;
  color: #ffa726;
  font-size: 1.125rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const ScrollContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  overflow: ${({ showAll }) => (showAll ? "visible" : "hidden")};
`;

const MatchesGrid = styled.div`
  display: grid;
  grid-template-rows: ${({ showAll }) => (showAll ? "auto" : "repeat(2, 1fr)")};
  grid-template-columns: ${({ showAll }) =>
    showAll ? "repeat(auto-fill, minmax(380px, 1fr))" : "none"};
  grid-auto-flow: ${({ showAll }) => (showAll ? "row" : "column")};
  grid-auto-columns: ${({ showAll }) => (showAll ? "none" : "380px")};
  gap: 1.5rem;
  overflow-x: ${({ showAll }) => (showAll ? "visible" : "auto")};
  overflow-y: ${({ showAll }) => (showAll ? "visible" : "hidden")};
  scroll-snap-type: ${({ showAll }) => (showAll ? "none" : "x mandatory")};
  scroll-behavior: smooth;
  padding: 0.5rem;
  scrollbar-width: none;
  height: ${({ showAll }) => (showAll ? "auto" : "700px")};

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MatchCard = styled.div`
  background: linear-gradient(180deg, #002766 0%, #001a4d 100%);
  border-radius: 1rem;
  padding: 1.5rem;
  color: #ffffff;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  height: 320px;
`;

const CompetitionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const CompetitionName = styled.div`
  font-size: 0.875rem;
  color: #ffa726;
  font-weight: 600;
  text-transform: uppercase;
`;

const MatchStatus = styled.div`
  font-size: 0.875rem;
  color: #ffa726;
  font-weight: 600;
  text-transform: uppercase;
`;

const Teams = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex: 1;
`;

const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex: 1;
`;

const TeamLogo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

const TeamName = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
`;

const Score = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  padding: 0 1.5rem;
`;

const MatchDate = styled.div`
  text-align: center;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
  z-index: 2;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  &.prev {
    left: 0;
  }

  &.next {
    right: 0;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

function Matches() {
  const [showAll, setShowAll] = useState(false);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -780 : 780; // Two cards width + gap
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <PageContainer>
      <SectionHeader>
        <Title>
          O'yinlar <span>jadvali</span>
        </Title>
        <ViewAll onClick={() => setShowAll(!showAll)}>
          {showAll ? "Kamroq ko'rish" : "Barchasini ko'rish"}
          {showAll ? <FaChevronLeft /> : <FaChevronRight />}
        </ViewAll>
      </SectionHeader>

      <ScrollContainer showAll={showAll}>
        {!showAll && (
          <>
            <ScrollButton className="prev" onClick={() => scroll("left")}>
              <FaChevronLeft />
            </ScrollButton>
            <ScrollButton className="next" onClick={() => scroll("right")}>
              <FaChevronRight />
            </ScrollButton>
          </>
        )}
        <MatchesGrid ref={scrollContainerRef} showAll={showAll}>
          {matchesData &&
            matchesData.map((match, index) => (
              <MatchCard key={index}>
                <CompetitionHeader>
                  <CompetitionName>{match.type}</CompetitionName>
                  <MatchStatus>TUGAGAN</MatchStatus>
                </CompetitionHeader>

                <Teams>
                  <Team>
                    <TeamLogo src={match.img} alt="Team Logo" />
                    <TeamName>Unwanted Boys</TeamName>
                  </Team>
                  <Score>{match.score}</Score>
                  <Team>
                    <TeamLogo src={match.img2} alt="Team Logo" />
                    <TeamName>{match.teams.split(" vs ")[1]}</TeamName>
                  </Team>
                </Teams>

                <MatchDate>{match.date}</MatchDate>
              </MatchCard>
            ))}
        </MatchesGrid>
      </ScrollContainer>
    </PageContainer>
  );
}

export default Matches;
