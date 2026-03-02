import { useState } from "react";
import ListItem from "./ListItem";

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

    // current experince state the user is entering is stored in exp
    // check to see if the id of this already exists in the list
    // if it does, its not a new work added but rather an edit
    const ifExisting = experienceList.some((work) => work.id === exp.id);

    if (ifExisting) {
      // if true means the id already exists, this its a edit of a current work already stored in experienceList
      setExperienceList(
        experienceList.map((work) => (work.id === exp.id ? exp : work)),
      );
    } else {
      setExperienceList([...experienceList, exp]);
    }
    resetForm();
  }
  function cancelForm() {
    resetForm();
  }
  function deleteExperience() {
    setExperienceList(experienceList.filter((work) => work.id !== exp.id));

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
        <button type="button" onClick={deleteExperience}>
          Delete
        </button>
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
export default function Experience({ experienceList, setExperienceList }) {
  const [showInput, setShowInput] = useState(false);
  const [experienceInfo, setExperienceInfo] = useState({
    id: crypto.randomUUID(),
    CompanyName: "",
    Location: "",
    positionTitle: "",
    StartDate: "",
    EndDate: "",
    jobDescription: "",
  });

  function updateExperience(e) {
    const { name, value } = e.target;

    setExperienceInfo({ ...experienceInfo, [name]: value });
  }

  function openForm() {
    setExperienceInfo({
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
  function editWork(id) {
    const workToUpdate = experienceList.find((work) => work.id === id);

    setExperienceInfo(workToUpdate);

    setShowInput(true);
  }
  return (
    <div className="experience-info">
      <h2>Experience</h2>
      <ul className="list">
        {experienceList.map((work) => (
          <ListItem key={work.id} handleChange={() => editWork(work.id)}>
            {work.CompanyName}
          </ListItem>
        ))}
      </ul>
      {showInput && (
        <Input
          exp={experienceInfo}
          setExperience={setExperienceInfo}
          handleChange={updateExperience}
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
