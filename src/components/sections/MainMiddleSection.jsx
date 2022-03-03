import {
  MainContent,
  StyledMainMiddlesSection,
  MainSocialIcons,
  SocialIcon,
  StyledArrowDown,
  HeroSocialIcons,
} from "../styles/MainMiddleSection.styled";
import { ResumeButton } from "../styles/Resume.styled";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaArrowDown } from "react-icons/fa";

export const MainMiddleSection = () => {
  return (
    <StyledMainMiddlesSection id="#main-section">
      <MainContent>
        <h1>Parisa Heyd</h1>
        <h3>Front-End Web Developer</h3>
        <p>Javascript - Ruby - React - Next.js - Node.js - HTML - CSS</p>
        <div>
          {/* <ResumeButton class="#projects" href="projects">
            Projects
          </ResumeButton> */}
          <ResumeButton href="#contact" primary margin="0 0 0 20px">
            Hire Me
          </ResumeButton>
        </div>
      </MainContent>
      <StyledArrowDown href="#about">
        <FaArrowDown />
      </StyledArrowDown>
      <HeroSocialIcons>
        <SocialIcon href="https://github.com/Parisaheid85" target="_blank">
          <FaGithub />
        </SocialIcon>

        <SocialIcon
          href="https://www.linkedin.com/in/parisa-heydarzadeh/"
          target="_blank"
        >
          <FaLinkedin />
        </SocialIcon>

        <SocialIcon href="mailto:parisaheid85@gmail.com" target="_blank">
          <HiOutlineMail />
        </SocialIcon>
      </HeroSocialIcons>
    </StyledMainMiddlesSection>
  );
};
