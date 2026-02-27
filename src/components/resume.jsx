import Header from "./resumeHead";
import ResumeEducation from "./resumeEdu";
import ResumeExperience from "./resumeExp";
export default function Resume({ user, education, eduList, experience }) {
  return (
    <section className="resume-container">
      <Header user={user}></Header>
      <ResumeEducation edu={education} list={eduList}></ResumeEducation>
      <ResumeExperience exp={experience}></ResumeExperience>
    </section>
  );
}
