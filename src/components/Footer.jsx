import React from "react";
import styled from "styled-components";
import { FaTelegram, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import footerImage from "../assets/img/footerimg.jpg";
import { footerData } from "../data/Data";

const FooterWrapper = styled.footer`
  background-image: url(${footerImage});
  background-size: cover;
  background-position: center;
  color: #fff;
  padding: 4rem 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
  }
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 4rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 2.4rem;
  margin-bottom: 2rem;
`;

const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 1rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 2.4rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const Copyright = styled.p`
  text-align: center;
  margin-top: 4rem;
  font-size: 1.4rem;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <FooterTitle>{footerData.about.title}</FooterTitle>
          <p>{footerData.about.description}</p>
        </FooterSection>
        <FooterSection>
          <FooterTitle>{footerData.links.title}</FooterTitle>
          {footerData.links.items.map((link, index) => (
            <FooterLink key={index} href={link.url}>
              {link.text}
            </FooterLink>
          ))}
        </FooterSection>
        <FooterSection>
          <FooterTitle>{footerData.contact.title}</FooterTitle>
          <p>{footerData.contact.address}</p>
          <p>{footerData.contact.phone}</p>
          <p>{footerData.contact.email}</p>
        </FooterSection>
        <FooterSection>
          <FooterTitle>{footerData.social.title}</FooterTitle>
          <SocialIcons>
            <SocialIcon
              href={footerData.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
            </SocialIcon>

            <SocialIcon
              href={footerData.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </SocialIcon>
            <SocialIcon
              href={footerData.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </SocialIcon>
          </SocialIcons>
        </FooterSection>
      </FooterContent>
      <Copyright>{footerData.copyright}</Copyright>
    </FooterWrapper>
  );
}

export default Footer;
