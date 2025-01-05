import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { matchesData } from "../data/Data";
import Cracker from "../components/Cracker";

const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;
  padding: 4rem 0;
`;

// ! Time Coinainer

const TimerContainer = styled.div`
  text-align: center;
  margin: 2rem auto 3rem;
  max-width: 600px;
  padding: 0 1rem;
`;

const NextMatchText = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#333333")};
  letter-spacing: 2px;
`;

const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;

  @media (max-width: 480px) {
    gap: 0.25rem;
  }
`;

const TimeUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px;

  @media (max-width: 480px) {
    min-width: 70px;
  }
`;

const Number = styled.div`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
  background: ${({ type }) => {
    switch (type) {
      case "days":
        return "linear-gradient(135deg, #ff0844 0%, #a50044 100%)";
      case "hours":
      case "minutes":
        return "linear-gradient(135deg, #a50044 0%, #6b0054 100%)";
      case "seconds":
        return "linear-gradient(135deg, #6b0054 0%, #002766 100%)";
      default:
        return "#a50044";
    }
  }};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Separator = styled.div`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff40" : "#33333340")};
  margin-top: 0;

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Label = styled.div`
  font-size: 0.875rem;
  text-transform: uppercase;
  margin-top: 0.5rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff80" : "#33333380")};
  letter-spacing: 1px;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

// ! Other Coinainers

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
  font-size: 2.5rem;
  font-weight: 700;
  color: #a50044;
  display: flex;
  gap: 0.5rem;

  span {
    color: #ffa726;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
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
    showAll ? "repeat(auto-fill, minmax(300px, 1fr))" : "none"};
  grid-auto-flow: ${({ showAll }) => (showAll ? "row" : "column")};
  grid-auto-columns: ${({ showAll }) => (showAll ? "none" : "300px")};
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

  @media (max-width: 1024px) {
    grid-auto-columns: ${({ showAll }) => (showAll ? "none" : "280px")};
    height: ${({ showAll }) => (showAll ? "auto" : "650px")};
  }

  @media (max-width: 768px) {
    grid-template-rows: auto;
    grid-auto-flow: row;
    height: auto;
    overflow-x: visible;
    grid-template-columns: 1fr;
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

  @media (max-width: 768px) {
    height: auto;
    min-height: 280px;
  }
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

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
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
  border-radius: 50%;
  height: 80px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
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

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    padding: 0.5rem 0;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
`;

function Matches() {
  const [showAll, setShowAll] = useState(false);
  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [timeUntilNextMatch, setTimeUntilNextMatch] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [showCracker, setShowCracker] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setShowAll(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Timer logic
    const updateTimer = () => {
      const now = new Date();
      const nextMatch = new Date("2025-01-07T22:00:00");
      const difference = nextMatch - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeUntilNextMatch({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    const timer = setInterval(updateTimer, 1000);
    updateTimer();

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(timer);
    };
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -620 : 620;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <PageContainer>
      {showCracker && <Cracker />}
      <TimerContainer>
        <NextMatchText>Next Match</NextMatchText>
        <TimerWrapper>
          <TimeUnit>
            <Number type="days">{timeUntilNextMatch.days}</Number>
            <Label>Days</Label>
          </TimeUnit>
          <Separator>:</Separator>
          <TimeUnit>
            <Number type="hours">{timeUntilNextMatch.hours}</Number>
            <Label>Hours</Label>
          </TimeUnit>
          <Separator>:</Separator>
          <TimeUnit>
            <Number type="minutes">{timeUntilNextMatch.minutes}</Number>
            <Label>Mins</Label>
          </TimeUnit>
          <Separator>:</Separator>
          <TimeUnit>
            <Number type="seconds">{timeUntilNextMatch.seconds}</Number>
            <Label>Secs</Label>
          </TimeUnit>
        </TimerWrapper>
      </TimerContainer>

      <SectionHeader>
        <Title>
          O'yinlar <span>jadvali</span>
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
        <MatchesGrid ref={scrollContainerRef} showAll={showAll || isMobile}>
          {matchesData &&
            matchesData.map((match, index) => (
              <MatchCard key={index}>
                <CompetitionHeader>
                  <CompetitionName>{match.type}</CompetitionName>
                  <MatchStatus>{match.result}</MatchStatus>
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
