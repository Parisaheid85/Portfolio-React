import { Projects } from "../../data/Projects";
import {
  ProjectDescription,
  ProjectImageContainer,
  SingleProject,
  StyledProjectSection,
  Tags,
} from "../styles/ProjectSection.styled";
import { SectionHeading } from "../styles/SectionHeading.styled";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

export const ProjectSection = () => {
  return (
    <>
      <StyledProjectSection id="project">
        <SectionHeading>
          <h1>Projects</h1>
        </SectionHeading>
        <div>
          {Projects &&
            Projects.map((project, index) => (
              <SingleProject key={index}>
                <ProjectImageContainer
                  href={project.projectlink}
                  target="_blank"
                >
                  <img src={project.image} alt={project.title} />
                </ProjectImageContainer>
                <ProjectDescription>
                  <h1>{project.title}</h1>
                  <Tags>
                    {project.tags &&
                      project.tags.map((tag, index) => (
                        <span key={index}> {tag} </span>
                      ))}
                  </Tags>
                  <p>{project.paragraph}</p>
                  <div>
                    <a href={project.codelink} target="_blank">
                      <FaGithub />
                      <span>View Code</span>
                    </a>
                    <a href={project.projectlink} target="_blank">
                      <FaLink />
                      <span>Demo</span>
                    </a>
                  </div>
                </ProjectDescription>
              </SingleProject>
            ))}
        </div>
      </StyledProjectSection>
      <hr />
    </>
  );
};
