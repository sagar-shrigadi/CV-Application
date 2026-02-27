import { useState } from "react";

function Input({ exp, setExperience, handleChange }) {
  return (
    <form className="experience-form">
      <label htmlFor="companyName">Company Name</label>
      <input
        type="text"
        name="CompanyName"
        id="companyName"
        placeholder="Enter Company Name"
        value={exp.CompanyName}
        onChange={handleChange}
      />

      <label htmlFor="positionTitle">Position Title</label>
      <input
        type="text"
        name="positionTitle"
        id="positionTitle"
        placeholder="Enter Position Title"
        value={exp.positionTitle}
        onChange={handleChange}
      />

      <div className="date-container">
        <div className="startDate">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            name="StartDate"
            id="startDate"
            value={exp.StartDate}
            onChange={handleChange}
          />
        </div>
        <div className="endDate">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            name="EndDate"
            id="endDate"
            value={exp.EndDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <label htmlFor="companyLocation">Location</label>
      <input
        type="text"
        name="Location"
        id="companyLocation"
        placeholder="Enter Location"
        value={exp.Location}
        onChange={handleChange}
      />

      <label htmlFor="jobDescription">Description</label>
      <input
        type="text"
        name="jobDescription"
        id="jobDescription"
        placeholder="Enter Job Description"
        value={exp.jobDescription}
        onChange={handleChange}
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
export default function Experience({
  experience,
  setExperience,
  handleChange,
}) {
  const [showInput, setShowInput] = useState(false);

  function btnClick() {
    setShowInput(true);
  }
  return (
    <div className="experience-info">
      <h2>Experience</h2>
      {showInput && (
        <Input
          exp={experience}
          setExperience={setExperience}
          handleChange={handleChange}
        ></Input>
      )}
      <button type="button" className="addExperience" onClick={btnClick}>
        + Experience
      </button>
    </div>
  );
}
