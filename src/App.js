import { GlobalStyles } from "./components/styles/Globals.styled";
import { ThemeProvider } from "styled-components";
import { NavBar } from "./components/layout/NavBar";
import { NavItems } from "./data/NavItems";
import { MainMiddleSection } from "./components/sections/MainMiddleSection";
import { Container } from "./components/styles/Container.styled";
import { AboutSection } from "./components/sections/AboutSection";
import { ProjectSection } from "./components/sections/ProjectSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/layout/Footer";

const App = () => {
  const theme = {
    colors: {
      white: "rgba(240, 247, 255, 1)",
      lightNavyBlue: "rgba(4, 22, 48, 1)",
      navyBlue: "rgba(2, 12, 27, 1)",
      purple: "rgba(147, 112, 219, 0.8)",
      green: "rgba(0, 206, 158, 1)",
      orange: "rgba(249, 105, 14, 1)",
    },

    mobile: "400px",
    transition: "all 650ms ease-in-out",
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavBar />
        <MainMiddleSection />
        <Container>
          <AboutSection />
          <ProjectSection />
          <ContactSection />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
