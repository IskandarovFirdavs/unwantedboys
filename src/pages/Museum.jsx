import React from "react";
import styled from "styled-components";
import { museumData } from "../data/Data";
const MuseumContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`;

const ItemCard = styled.div`
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ItemName = styled.h3`
  margin-bottom: 0.5rem;
`;

const ItemPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

function Museum() {
  return (
    <MuseumContainer>
      {museumData.map((item, id) => (
        <ItemCard key={item.id}>
          <img src={item.image} alt="" />
          <ItemName>{item.name}</ItemName>
          <ItemPrice>{item.price}</ItemPrice>
        </ItemCard>
      ))}
    </MuseumContainer>
  );
}

export default Museum;
