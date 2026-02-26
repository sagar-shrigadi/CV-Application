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

  function updateUserName(e) {
    setUserInfo({ ...userInfo, Name: e.target.value });
  }
  function updateUserEmail(e) {
    setUserInfo({ ...userInfo, Email: e.target.value });
  }
  function updateUserPhone(e) {
    setUserInfo({ ...userInfo, Phone: e.target.value });
  }
  function updateUserAddress(e) {
    setUserInfo({ ...userInfo, Address: e.target.value });
  }

  function updateSchoolName(e) {
    setEducationInfo({ ...educationInfo, SchoolName: e.target.value });
  }
  function updateSchoolLocation(e) {
    setEducationInfo({ ...educationInfo, Location: e.target.value });
  }
  function updateDegree(e) {
    setEducationInfo({ ...educationInfo, Degree: e.target.value });
  }
  function updateStartDate(e) {
    setEducationInfo({ ...educationInfo, StartDate: e.target.value });
  }
  function updateEndDate(e) {
    setEducationInfo({ ...educationInfo, EndDate: e.target.value });
  }

  return (
    <>
      <section className="forms-container">
        <UserInput
          user={userInfo}
          userName={updateUserName}
          userEmail={updateUserEmail}
          userPhone={updateUserPhone}
          userAddress={updateUserAddress}
          education={educationInfo}
          setEducation={setEducationInfo}
          schoolName={updateSchoolName}
          schoolLocation={updateSchoolLocation}
          degree={updateDegree}
          schoolStartdate={updateStartDate}
          schoolEnddate={updateEndDate}
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
