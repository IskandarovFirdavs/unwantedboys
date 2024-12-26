import styled from "styled-components";
import { playersData } from "../data/Data";

// Container for all player cards
const PlayersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 3rem;
  background-color: ${({ theme }) => theme.background};
`;

// Individual player card
const PlayerCard = styled.div`
  background: #4848ab;
  color: ${({ theme }) => theme.text};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem;
  width: 300px;
  text-align: center;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2),
    -5px -5px 15px rgba(255, 255, 255, 0.7);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3),
      -5px -5px 20px rgba(255, 255, 255, 0.8);
  }

  &:hover .socialOverlay {
    transform: translateY(0);
    opacity: 1;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
    border-radius: 15px;
    margin-bottom: 1rem;
  }
`;

// Overlay for Instagram details
const SocialOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1rem;
  font-size: 1.2rem;
  text-align: center;
  transform: translateY(100%);
  transition: transform 0.4s ease, opacity 0.4s ease;
  border-radius: 0 0 20px 20px;
  opacity: 0;

  a {
    color: #1da1f2;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// Player name style
const PlayerName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
  text-transform: capitalize;
`;

// Additional player information style
const PlayerInfo = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.subText};
`;

function Players() {
  return (
    <PlayersContainer>
      {playersData.map((player) => (
        <PlayerCard key={player.id}>
          <img src={player.image} alt={`${player.name}`} />
          <PlayerName>{player.name}</PlayerName>
          <PlayerInfo>Pozitsiya: {player.position}</PlayerInfo>
          <PlayerInfo>Raqam: {player.number}</PlayerInfo>
          <SocialOverlay className="socialOverlay">
            Follow on{" "}
            <a
              href="https://www.instagram.com/fc_unwantedboys?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </SocialOverlay>
        </PlayerCard>
      ))}
    </PlayersContainer>
  );
}

export default Players;
