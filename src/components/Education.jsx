import { useState } from "react";

function Input() {
  return (
    <form className="education-form">
      <label htmlFor="school">School Name</label>
      <input
        type="text"
        name="school"
        id="school"
        placeholder="Enter School / University"
      />

      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        name="degree"
        id="degree"
        placeholder="Enter Degree / Field Of Study"
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
export default function Education() {
  const [showInput, setShowInput] = useState(false);
  function btnClick() {
    setShowInput(true);
  }
  return (
    <div className="education-info">
      <h2>Education</h2>
      {showInput && <Input></Input>}
      <button type="button" className="addEducation" onClick={btnClick}>
        + Education
      </button>
    </div>
  );
}
