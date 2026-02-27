import "../styles/resumeExp.css";

export default function ResumeExperience({ exp, list }) {
  return (
    <div className="experience-container">
      <h2>Work Experience</h2>

      {list.map((work) => (
        <div key={work.id} className="experience">
          <div className="company-details">
            <div className="name-duration">
              <strong>
                <p>{work.CompanyName}</p>
              </strong>
              <strong>
                <p>
                  {work.StartDate} - {work.EndDate}
                </p>
              </strong>
            </div>
            <div className="title-location">
              <em>
                <p>{work.positionTitle}</p>
              </em>
              <em>
                <p>{work.Location}</p>
              </em>
            </div>
          </div>
          <div className="job-description">
            <p>{work.jobDescription}</p>
          </div>
        </div>
      ))}

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
