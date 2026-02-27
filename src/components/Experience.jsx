import { useState } from "react";

function Input({
  exp,
  setExperience,
  handleChange,
  experienceList,
  setExperienceList,
  closeForm,
}) {
  function resetForm() {
    setExperience({
      id: crypto.randomUUID(),
      CompanyName: "",
      Location: "",
      positionTitle: "",
      StartDate: "",
      EndDate: "",
      jobDescription: "",
    });

    closeForm();
  }
  function saveExperience(e) {
    e.preventDefault();

    setExperienceList([...experienceList, exp]);
    resetForm();
  }
  function cancelForm() {
    resetForm();
  }
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
          <button type="button" onClick={cancelForm}>
            Cancel
          </button>
          <button type="submit" onClick={saveExperience}>
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
export default function Experience({
  experience,
  setExperience,
  handleChange,
  experienceList,
  setExperienceList,
}) {
  const [showInput, setShowInput] = useState(false);

  function openForm() {
    setExperience({
      id: crypto.randomUUID(),
      CompanyName: "",
      Location: "",
      positionTitle: "",
      StartDate: "",
      EndDate: "",
      jobDescription: "",
    });
    setShowInput(true);
  }
  function closeForm() {
    setShowInput(false);
  }
  return (
    <div className="experience-info">
      <h2>Experience</h2>
      {showInput && (
        <Input
          exp={experience}
          setExperience={setExperience}
          handleChange={handleChange}
          experienceList={experienceList}
          setExperienceList={setExperienceList}
          closeForm={closeForm}
        ></Input>
      )}
      <button type="button" className="addExperience" onClick={openForm}>
        + Experience
      </button>
    </div>
  );
}
