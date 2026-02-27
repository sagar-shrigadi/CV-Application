import { useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput.jsx";
import Resume from "./components/resume.jsx";

export default function App() {
  const [userInfo, setUserInfo] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
  });
  const [educationInfo, setEducationInfo] = useState({
    id: crypto.randomUUID(),
    SchoolName: "",
    Location: "",
    Degree: "",
    StartDate: "",
    EndDate: "",
  });
  const [educationList, setEducationList] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState({
    id: crypto.randomUUID(),
    CompanyName: "",
    Location: "",
    positionTitle: "",
    StartDate: "",
    EndDate: "",
    jobDescription: "",
  });

  function updateUser(e) {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [name]: value });
  }

  function updateEducation(e) {
    const { name, value } = e.target;

    setEducationInfo({ ...educationInfo, [name]: value });
  }

  function updateExperience(e) {
    const { name, value } = e.target;

    setExperienceInfo({ ...experienceInfo, [name]: value });
  }

  return (
    <>
      <section className="forms-container">
        <UserInput
          user={userInfo}
          updateUser={updateUser}
          education={educationInfo}
          setEducation={setEducationInfo}
          updateSchool={updateEducation}
          educationList={educationList}
          setEducationList={setEducationList}
          experience={experienceInfo}
          setExperience={setExperienceInfo}
          updateExperience={updateExperience}
        ></UserInput>
      </section>
      <section className="resume-container">
        <Resume
          user={userInfo}
          education={educationInfo}
          eduList={educationList}
          experience={experienceInfo}
        ></Resume>
      </section>
    </>
  );
}
