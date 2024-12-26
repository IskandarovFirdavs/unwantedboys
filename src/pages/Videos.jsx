import React from "react";
import styled from "styled-components";
import { videosData } from "../data/Data";

const VideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`;

const VideoCard = styled.a`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  text-decoration: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const VideoThumbnail = styled.img`
  width: 100%;
  height: 168px;
  object-fit: cover;
`;

const VideoTitle = styled.h3`
  padding: 1rem;
  font-size: 1rem;
`;

const GradientButton = styled.a`
  display: inline-block;
  color: #fff;
  background: linear-gradient(to right, #ff0000, #0000ff);
  width: 20%;
  height: 50px;
  border-radius: 20px;
  margin-left: 40%;
  font-weight: 900;
  font-size: larger;
  margin-bottom: 20px;
  text-align: center;
  line-height: 50px;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 50%;
    margin-left: 25%;
  }
`;

function Videos() {
  return (
    <>
      <VideosContainer>
        {videosData.map((video) => (
          <VideoCard
            key={video.id}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <VideoThumbnail src={video.thumbnail} alt={video.title} />
            <VideoTitle>{video.title}</VideoTitle>
          </VideoCard>
        ))}
      </VideosContainer>
      <GradientButton
        href="https://www.youtube.com/@islomabdujabborov"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ko'proq {">"}
      </GradientButton>
    </>
  );
}

export default Videos;
