import React from "react";
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
  font-size: 3.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.textDark};
  span {
    color: ${({ theme }) => theme.accent};
  }
`;

const ViewAll = styled.a`
  color: ${({ theme }) => theme.accent};
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

const ScrollContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const MatchesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 0 -1rem;
  padding: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MatchCard = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary} 0%,
    ${({ theme }) => theme.backgroundDark} 100%
  );
  border-radius: 1rem;
  padding: 2rem;
  color: ${({ theme }) => theme.textLight};
  scroll-snap-align: start;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Competition = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  font-weight: 600;
`;

const Teams = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Team = styled.div`
  text-align: center;
  flex: 1;
`;

const TeamLogo = styled.img`
  width: 6rem;
  height: 6rem;
  margin-bottom: 1rem;
`;

const TeamName = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
`;

const Score = styled.div`
  font-size: 3.2rem;
  font-weight: 700;
  padding: 0 2rem;
`;

const MatchInfo = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const MatchDate = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textLight};
  opacity: 0.8;
`;

const Comp = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: start;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
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

function Matches() {
  const scrollContainerRef = React.useRef(null);

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
          O'yinlar <span>jadvali</span>
        </Title>
        <ViewAll href="#">
          Barchasini ko'rish
          <FaChevronRight />
        </ViewAll>
      </SectionHeader>

      <ScrollContainer>
        <ScrollButton className="prev" onClick={() => scroll("left")}>
          <FaChevronLeft />
        </ScrollButton>

        <MatchesGrid ref={scrollContainerRef}>
          {matchesData.map((match, index) => (
            <MatchCard key={index}>
              <Comp>
                {" "}
                <Competition>{match.type}</Competition>{" "}
                <Competition>{match.result}</Competition>
              </Comp>

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
              <MatchInfo>
                <MatchDate>{match.date}</MatchDate>
              </MatchInfo>
            </MatchCard>
          ))}
        </MatchesGrid>

        <ScrollButton className="next" onClick={() => scroll("right")}>
          <FaChevronRight />
        </ScrollButton>
      </ScrollContainer>
    </PageContainer>
  );
}

export default Matches;
