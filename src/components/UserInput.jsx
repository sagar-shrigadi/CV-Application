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
      <Wrapper>{<Education></Education>}</Wrapper>
      <Wrapper>{<Experience></Experience>}</Wrapper>
    </>
  );
}
