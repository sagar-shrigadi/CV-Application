import { useState } from "react";

function Input() {
  return (
    <form className="experience-form">
      <label htmlFor="companyName">Company Name</label>
      <input
        type="text"
        name="companyName"
        id="companyName"
        placeholder="Enter Company Name"
      />

      <label htmlFor="positionTitle">Position Title</label>
      <input
        type="text"
        name="positionTitle"
        id="positionTitle"
        placeholder="Enter Position Title"
      />

      <div className="date-container">
        <div className="startDate">
          <label htmlFor="startDate">Start Date</label>
          <input type="date" name="startDate" id="startDate" />
        </div>
        <div className="endDate">
          <label htmlFor="endDate">End Date</label>
          <input type="date" name="endDate" id="endDate" />
        </div>
      </div>

      <label htmlFor="companyLocation">Location</label>
      <input
        type="text"
        name="companyLocation"
        id="companyLocation"
        placeholder="Enter Location"
      />

      <label htmlFor="jobDescription">Description</label>
      <input
        type="text"
        name="jobDescription"
        id="jobDescription"
        placeholder="Enter Job Description"
      />
      <div className="btnContainer">
        <button type="button">Delete</button>
        <div className="btnFormControl">
          <button type="button">Cancel</button>
          <button type="submit">Save</button>
        </div>
      </div>
    </form>
  );
}
export default function Experience() {
  const [showInput, setShowInput] = useState(false);

  function btnClick() {
    setShowInput(true);
  }
  return (
    <div className="experience-info">
      <h2>Experience</h2>
      {showInput && <Input></Input>}
      <button type="button" className="addExperience" onClick={btnClick}>
        + Experience
      </button>
    </div>
  );
}
