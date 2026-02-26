import { useState } from "react";

function Input({
  edu,
  setEducation,
  handleChange,
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
        name="SchoolName"
        id="school"
        placeholder="Enter School / University"
        value={edu.SchoolName}
        onChange={handleChange}
      />

      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="Location"
        id="location"
        placeholder="Enter School / University Location"
        value={edu.Location}
        onChange={handleChange}
      />

      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        name="Degree"
        id="degree"
        placeholder="Enter Degree / Field Of Study"
        value={edu.Degree}
        onChange={handleChange}
      />

      <div className="date-container">
        <div className="startDate">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            name="StartDate"
            id="startDate"
            value={edu.StartDate}
            onChange={handleChange}
          />
        </div>
        <div className="endDate">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            name="EndDate"
            id="endDate"
            value={edu.EndDate}
            onChange={handleChange}
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
  handleChange,
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
          handleChange={handleChange}
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
