import "../styles/resume.css";
import Header from "./resumeHead";
import ResumeEducation from "./resumeEdu";
import ResumeExperience from "./resumeExp";
export default function Resume({
  user,
  education,
  eduList,
  experience,
  expList,
}) {
  return (
    <section className="resume-container">
      <Header user={user}></Header>
      <ResumeExperience exp={experience} list={expList}></ResumeExperience>
      <ResumeEducation edu={education} list={eduList}></ResumeEducation>
    </section>
  );
}
