import { Link } from "react-router-dom";
import styled from "styled-components";
import reactjsLogo from "/public/img/reactjs-logo.svg";
import nestjsLogo from "/public/img/nestjs-logo.svg";

const FooterWrapper = styled.footer`
  color: ${(props) => props.theme.footerColor};
  background-color: ${(props) => props.theme.footerBg};
  text-align: center;
  padding: 48px;
  margin-top: 8px;
`;

const FooterDescription = styled.p`
  font-size: 14px;
`;

const FooterBlogLink = styled(Link)`
  font-weight: 500;
  color: ${(props) => props.theme.linkBrandedColor};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.linkBrandedColorHover};
    text-decoration: underline;
  }
`;

const FooterNavLinks = styled.ul`
  display: flex;
  gap: 8px;
  justify-content: center;
`;
const FooterNavLink = styled.li`
  display: flex;
  align-items: center;
  a {
    color: ${(props) => props.theme.linkBrandedColor};
  }
  .dot {
    margin-left: 4px;
    display: inline-block;
    height: 4px;
    width: 4px;
    background-color: ${(props) => props.theme.base[70]};
    border-radius: 50%;
  }
`;

const FooterText = styled.p`
  img {
    margin-left: 8px;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterDescription>
        <FooterBlogLink to="/">DEVBLOG Community 👩‍💻👨‍💻</FooterBlogLink> — A
        constructive and inclusive social network for software developers. With
        you every step of your journey.
      </FooterDescription>
      <FooterNavLinks>
        <FooterNavLink>
          <Link to="/">Home</Link>
          <span className="dot"></span>
        </FooterNavLink>
        <FooterNavLink to="/tags">
          <Link to="/tags">Tags</Link>
        </FooterNavLink>
      </FooterNavLinks>
      <FooterText>
        Made with love and
        <img src={reactjsLogo} alt="" /> & <img src={nestjsLogo} alt="" />.
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
