import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  ContactInfo,
  DetailsWrapper,
  ImageWrapper,
  StyledContactSection,
} from "../styles/ContactSection.styled";
import { SectionHeading } from "../styles/SectionHeading.styled";

export const ContactSection = () => {
  return (
    <>
      <StyledContactSection id="contact">
        <SectionHeading>
          <h1>Contact</h1>
        </SectionHeading>
        <DetailsWrapper>
          <ContactInfo>
            <h3>Let's Talk</h3>
            <p>
              Wanna get in touch or talk about a project? please reach out! feel
              free to drop me a message via the links below and I will get back
              to you ASAP!
            </p>
            <div>
              <a href="mailto:parisaheid85@gmail.com">
                <FaEnvelope />
                <span>parisaheid85@gmail.com</span>
              </a>
              <a href="https://www.facebook.com/parisa.heidarzadeh">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/in/parisa-heydarzadeh/">
                <FaLinkedin />
              </a>
            </div>
          </ContactInfo>
          <ImageWrapper>
            <img src="./images/contact.png" alt="Contact" />
          </ImageWrapper>
        </DetailsWrapper>
      </StyledContactSection>
      <hr />
    </>
  );
};
