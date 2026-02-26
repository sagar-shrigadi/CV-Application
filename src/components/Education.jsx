import { useState } from "react";

function Input({
  edu,
  setEducation,
  updateSchool,
  updateLocation,
  updateDegree,
  updateStartDate,
  updateEndDate,
  educationList,
  setEducationList,
  closeForm,
}) {
  function saveEducation(e) {
    e.preventDefault();

    setEducationList([...educationList, edu]);

    setEducation({
      id: crypto.randomUUID(),
      SchoolName: "",
      Location: "",
      Degree: "",
      StartDate: "",
      EndDate: "",
    });

    closeForm();
  }
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

      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        id="location"
        placeholder="Enter School / University Location"
        value={edu.Location}
        onChange={updateLocation}
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

      <div className="btnContainer">
        <button type="button">Delete</button>
        <div className="btnFormControl">
          <button type="button">Cancel</button>
          <button type="submit" onClick={saveEducation}>
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
export default function Education({
  education,
  setEducation,
  updateSchool,
  updateSchoolLocation,
  updateDegree,
  updateSchoolStartDate,
  updateSchoolEndDate,
  educationList,
  setEducationList,
}) {
  const [showInput, setShowInput] = useState(false);
  function openForm() {
    setShowInput(true);
  }
  function closeForm() {
    setShowInput(false);
  }
  return (
    <div className="education-info">
      <h2>Education</h2>
      {showInput && (
        <Input
          edu={education}
          setEducation={setEducation}
          updateSchool={updateSchool}
          updateLocation={updateSchoolLocation}
          updateDegree={updateDegree}
          updateStartDate={updateSchoolStartDate}
          updateEndDate={updateSchoolEndDate}
          educationList={educationList}
          setEducationList={setEducationList}
          closeForm={closeForm}
        ></Input>
      )}
      <button type="button" className="addEducation" onClick={openForm}>
        + Education
      </button>
    </div>
  );
}
