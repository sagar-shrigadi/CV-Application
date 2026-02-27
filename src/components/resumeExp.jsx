import "../styles/resumeExp.css";
export default function ResumeExperience({ exp }) {
  return (
    <div className="experience-container">
      <h2>Work Experience</h2>

      <div className="experience">
        <div className="company-details">
          <div className="name-duration">
            <strong>
              <p>{exp.CompanyName}</p>
            </strong>
            <strong>
              <p>
                {exp.StartDate} - {exp.EndDate}
              </p>
            </strong>
          </div>
          <div className="title-location">
            <em>
              <p>{exp.positionTitle}</p>
            </em>
            <em>
              <p>{exp.Location}</p>
            </em>
          </div>
        </div>
        <div className="job-description">
          <p>{exp.jobDescription}</p>
        </div>
      </div>
    </div>
  );
}
