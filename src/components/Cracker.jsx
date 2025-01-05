import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const shoot = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  100% { transform: translate(var(--x), var(--y)) rotate(var(--r)); }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
`;

const Confetti = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: ${({ color }) => color};
  opacity: 0.7;
  animation: ${shoot} 2s forwards cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const colors = [
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#ff00ff",
  "#00ffff",
];

const Cracker = () => {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    const pieces = [];
    for (let i = 0; i < 200; i++) {
      pieces.push({
        x: `${Math.random() * 200 - 100}vw`, // Spread across a larger range
        y: `${Math.random() * 200 - 100}vh`, // Spread across a larger range
        r: `${Math.random() * 720 - 360}deg`, // Random rotation
        color: colors[Math.floor(Math.random() * colors.length)],
        key: i,
      });
    }
    setConfetti(pieces);

    const timer = setTimeout(() => {
      setConfetti([]);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      {confetti.map((piece) => (
        <Confetti
          key={piece.key}
          color={piece.color}
          style={{ "--x": piece.x, "--y": piece.y, "--r": piece.r }}
        />
      ))}
    </Container>
  );
};

export default Cracker;
