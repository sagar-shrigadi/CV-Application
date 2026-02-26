import { useState } from "react";
import ListItem from "./ListItem";

function Input({
  edu,
  setEducation,
  handleChange,
  educationList,
  setEducationList,
  closeForm,
}) {
  function resetForm() {
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
  function saveEducation(e) {
    e.preventDefault();

    // Check if the school we are saving is already in our list
    const ifExisting = educationList.some((school) => school.id === edu.id);

    if (ifExisting) {
      setEducationList(
        educationList.map((school) => (school.id === edu.id ? edu : school)),
      );
    } else {
      setEducationList([...educationList, edu]);
    }

    resetForm();
  }

  function cancelForm() {
    resetForm();
  }

  function deleteEducation(e) {
    e.preventDefault();

    setEducationList(educationList.filter((school) => school.id !== edu.id));

    resetForm();
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
        <button type="button" onClick={deleteEducation}>
          Delete
        </button>
        <div className="btnFormControl">
          <button type="button" onClick={cancelForm}>
            Cancel
          </button>
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
    setEducation({
      id: crypto.randomUUID(),
      SchoolName: "",
      Location: "",
      Degree: "",
      StartDate: "",
      EndDate: "",
    });
    setShowInput(true);
  }
  function closeForm() {
    setShowInput(false);
  }
  function editSchool(id) {
    const schoolToEdit = educationList.find((school) => school.id === id);

    setEducation(schoolToEdit);

    setShowInput(true);
  }
  return (
    <div className="education-info">
      <h2>Education</h2>
      <ul className="list">
        {educationList.map((school) => (
          <ListItem key={school.id} handleChange={() => editSchool(school.id)}>
            {school.SchoolName}
          </ListItem>
        ))}
      </ul>
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
