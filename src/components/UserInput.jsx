import General from "./General.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

function Wrapper({ children }) {
  return <article>{children}</article>;
}

export default function UserInput() {
  return (
    <section className="forms-container">
      <Wrapper>{<General></General>}</Wrapper>
      <Wrapper>{<Education></Education>}</Wrapper>
      <Wrapper>{<Experience></Experience>}</Wrapper>
    </section>
  );
}
