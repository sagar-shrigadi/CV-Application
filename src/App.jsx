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

  return (
    <>
      <section className="forms-container">
        <UserInput
          user={userInfo}
          userName={updateUserName}
          userEmail={updateUserEmail}
          userPhone={updateUserPhone}
          userAddress={updateUserAddress}
        ></UserInput>
      </section>
      <section className="resume-container">
        <Resume user={userInfo}></Resume>
      </section>
    </>
  );
}
