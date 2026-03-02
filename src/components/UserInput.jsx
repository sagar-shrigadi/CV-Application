import General from "./General.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

function Wrapper({ children }) {
  return <article>{children}</article>;
}

export default function UserInput({
  user,
  updateUser,
  educationList,
  setEducationList,
  experienceList,
  setExperienceList,
}) {
  return (
    <>
      <Wrapper>
        {<General user={user} handleChange={updateUser}></General>}
      </Wrapper>
      <Wrapper>
        {
          <Education
            educationList={educationList}
            setEducationList={setEducationList}
          ></Education>
        }
      </Wrapper>
      <Wrapper>
        {
          <Experience
            experienceList={experienceList}
            setExperienceList={setExperienceList}
          ></Experience>
        }
      </Wrapper>
    </>
  );
}
