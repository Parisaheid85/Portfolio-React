import {
  StyledAboutSection,
  ImageContainer,
  StyledImage,
  AboutContent,
  StyledHeading,
  StyledEmoji,
} from "../styles/AboutSection.styled";

export const AboutSection = () => {
  return (
    <>
      <StyledAboutSection id="about">
        <ImageContainer>
          <StyledImage src="/images/unnamed.jpeg" alt="Parisa Heyd" />
        </ImageContainer>
        <AboutContent>
          <StyledHeading>
            Hello <StyledEmoji>👋</StyledEmoji>
          </StyledHeading>
          <p>
            My name is Parisa, I am a Front-End Developer recently graduated
            from General Assembly with the background of Electronic Engineering
            and Acounting. The connected world of today and the very fast speed
            of technology,also my passion to the constant learning as well as
            being a good problem solver has lead me into my desired career to
            become a Software Developer.
          </p>
          <br />
          <p>
            I have gained so much interest towards coding, designing web apps or
            creating the environment for everything that users see, click, and
            touch. being a full time student at GA and obtainting enormous
            knowledge in tech languages and frameworks throughout this wonderful
            journey allowed me to build several web apps and projects that you
            can check out in Projects section.
          </p>
          <br />
        </AboutContent>
      </StyledAboutSection>
      <hr />
    </>
  );
};
