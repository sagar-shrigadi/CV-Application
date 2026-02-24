import General from "./General.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

function Wrapper({ children }) {
  return <article>{children}</article>;
}

export default function UserInput({
  user,
  userName,
  userEmail,
  userPhone,
  userAddress,
  education,
  schoolName,
  schoolLocation,
  degree,
  schoolStartdate,
  schoolEnddate,
}) {
  return (
    <>
      <Wrapper>
        {
          <General
            user={user}
            updateName={userName}
            updateEmail={userEmail}
            updatePhone={userPhone}
            updateAddress={userAddress}
          ></General>
        }
      </Wrapper>
      <Wrapper>
        {
          <Education
            education={education}
            updateSchool={schoolName}
            updateSchoolLocation={schoolLocation}
            updateDegree={degree}
            updateSchoolStartDate={schoolStartdate}
            updateSchoolEndDate={schoolEnddate}
          ></Education>
        }
      </Wrapper>
      <Wrapper>{<Experience></Experience>}</Wrapper>
    </>
  );
}
