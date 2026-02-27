import General from "./General.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

function Wrapper({ children }) {
  return <article>{children}</article>;
}

export default function UserInput({
  user,
  updateUser,
  education,
  setEducation,
  updateSchool,
  educationList,
  setEducationList,
  experience,
  setExperience,
  updateExperience,
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
            education={education}
            setEducation={setEducation}
            handleChange={updateSchool}
            educationList={educationList}
            setEducationList={setEducationList}
          ></Education>
        }
      </Wrapper>
      <Wrapper>
        {
          <Experience
            experience={experience}
            setExperience={setExperience}
            handleChange={updateExperience}
            experienceList={experienceList}
            setExperienceList={setExperienceList}
          ></Experience>
        }
      </Wrapper>
    </>
  );
}
