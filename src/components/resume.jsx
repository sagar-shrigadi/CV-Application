import "../styles/resume.css";
import Header from "./resumeHead";
import ResumeEducation from "./resumeEdu";
import ResumeExperience from "./resumeExp";
export default function Resume({ user, eduList, expList }) {
  return (
    <section className="resume-container">
      <Header user={user}></Header>
      <ResumeExperience list={expList}></ResumeExperience>
      <ResumeEducation list={eduList}></ResumeEducation>
    </section>
  );
}
