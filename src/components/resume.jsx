import Header from "./resumeHead";

export default function Resume({ user }) {
  return (
    <section className="resume-container">
      <Header user={user}></Header>
    </section>
  );
}
