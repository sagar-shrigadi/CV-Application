import { useState } from "react";

function Input({
  edu,
  updateSchool,
  updateDegree,
  updateStartDate,
  updateEndDate,
  updateLocation,
}) {
  return (
    <form className="education-form">
      <label htmlFor="school">School Name</label>
      <input
        type="text"
        name="school"
        id="school"
        placeholder="Enter School / University"
        value={edu.SchoolName}
        onChange={updateSchool}
      />

      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        name="degree"
        id="degree"
        placeholder="Enter Degree / Field Of Study"
        value={edu.Degree}
        onChange={updateDegree}
      />

      <div className="date-container">
        <div className="startDate">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={edu.StartDate}
            onChange={updateStartDate}
          />
        </div>
        <div className="endDate">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={edu.EndDate}
            onChange={updateEndDate}
          />
        </div>
      </div>

      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        id="location"
        placeholder="Enter Location of School / University"
        value={edu.Location}
        onChange={updateLocation}
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
export default function Education({
  education,
  updateSchool,
  updateDegree,
  updateSchoolStartDate,
  updateSchoolEndDate,
  updateSchoolLocation,
}) {
  const [showInput, setShowInput] = useState(false);
  function btnClick() {
    setShowInput(true);
  }
  return (
    <div className="education-info">
      <h2>Education</h2>
      {showInput && (
        <Input
          edu={education}
          updateSchool={updateSchool}
          updateDegree={updateDegree}
          updateStartDate={updateSchoolStartDate}
          updateEndDate={updateSchoolEndDate}
          updateLocation={updateSchoolLocation}
        ></Input>
      )}
      <button type="button" className="addEducation" onClick={btnClick}>
        + Education
      </button>
    </div>
  );
}
