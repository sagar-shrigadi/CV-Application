import "../styles/resumeEdu.css";

export default function ResumeEducation({ edu }) {
  return (
    <div className="education-container">
      <h2>Education</h2>

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
