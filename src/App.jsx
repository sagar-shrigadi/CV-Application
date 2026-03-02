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
  const [educationList, setEducationList] = useState([]);

  const [experienceList, setExperienceList] = useState([]);

  function updateUser(e) {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [name]: value });
  }

  return (
    <>
      <section className="forms-container">
        <UserInput
          user={userInfo}
          updateUser={updateUser}
          educationList={educationList}
          setEducationList={setEducationList}
          experienceList={experienceList}
          setExperienceList={setExperienceList}
        ></UserInput>
      </section>
      <section className="resume-container">
        <Resume
          user={userInfo}
          eduList={educationList}
          expList={experienceList}
        ></Resume>
      </section>
    </>
  );
}
