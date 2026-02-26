import Header from "./resumeHead";
import ResumeEducation from "./resumeEdu";

export default function Resume({ user, education, eduList }) {
  return (
    <section className="resume-container">
      <Header user={user}></Header>
      <ResumeEducation edu={education} list={eduList}></ResumeEducation>
    </section>
  );
}
