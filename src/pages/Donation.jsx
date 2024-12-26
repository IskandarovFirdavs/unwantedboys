import React from "react";
import styled from "styled-components";

const DonationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #778abf, #233e7e);
  min-height: 80vh;
  font-family: "Arial", sans-serif;
`;

const DonationSection = styled.div`
  background-color: white;
  color: #333;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const DonationTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #00796b;
`;

const DonationInfo = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  line-height: 1.5;
`;

const DonationButton = styled.button`
  background-color: #001079;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #004d40;
    transform: scale(1.05);
  }
`;

const DonationImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const DonationDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 1rem 0;
`;

function Donation() {
  return (
    <DonationContainer>
      <DonationSection>
        <DonationTitle>Dasturchini Qullab Quvvatlash</DonationTitle>
        <DonationDescription>For more motivation . . .</DonationDescription>
        <DonationInfo>Bank: </DonationInfo>
        <DonationInfo>Hisob raqami: 9860 0101 0562 3549</DonationInfo>
        <DonationInfo>Karta egasi: Guzala Berdiyeva</DonationInfo>
        <DonationButton>
          <a href="https://click.uz">Donate Now</a>
        </DonationButton>
      </DonationSection>
    </DonationContainer>
  );
}

export default Donation;
