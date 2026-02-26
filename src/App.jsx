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

  function updateUser(e) {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [name]: value });
  }

  function updateEducation(e) {
    const { name, value } = e.target;

    setEducationInfo({ ...educationInfo, [name]: value });
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
        ></UserInput>
      </section>
      <section className="resume-container">
        <Resume
          user={userInfo}
          education={educationInfo}
          eduList={educationList}
        ></Resume>
      </section>
    </>
  );
}
