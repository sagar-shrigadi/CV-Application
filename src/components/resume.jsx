import Header from "./resumeHead";
import ResumeEducation from "./resumeEdu";

export default function Resume({ user, education }) {
  return (
    <section className="resume-container">
      <Header user={user}></Header>
      <ResumeEducation edu={education}></ResumeEducation>
    </section>
  );
}
