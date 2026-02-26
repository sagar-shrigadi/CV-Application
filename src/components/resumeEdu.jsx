import "../styles/resumeEdu.css";

export default function ResumeEducation({ edu, list }) {
  return (
    <div className="education-container">
      <h2>Education</h2>

      {list.map((education) => (
        <div key={education.id} className="education">
          <div className="uni-details">
            <strong>
              <p>{education.SchoolName}</p>
            </strong>

            <p>{education.Location}</p>
          </div>

          <div className="degree-details">
            <em>
              <p>{education.Degree}</p>
            </em>
            <div className="degree-period">
              <p>
                {education.StartDate} - {education.EndDate}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="education">
        <div className="uni-details">
          <strong>
            <p>{edu.SchoolName}</p>
          </strong>

          <p>{edu.Location}</p>
        </div>

        <div className="degree-details">
          <em>
            <p>{edu.Degree}</p>
          </em>
          <div className="degree-period">
            <p>
              {edu.StartDate} - {edu.EndDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
