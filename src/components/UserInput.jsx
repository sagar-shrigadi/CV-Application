import General from "./General.jsx";
import Education from "./Education.jsx";

function Wrapper({ children }) {
  return <section>{children}</section>;
}

export default function UserInput() {
  return (
    <div className="form-container">
      <Wrapper>{<General></General>}</Wrapper>
      <Wrapper>{<Education></Education>}</Wrapper>
    </div>
  );
}
