import "../styles/resumeEdu.css";

export default function ResumeEducation({ list }) {
  return (
    <div className="education-container">
      <h2>Education</h2>

      {list.map((education) => (
        <div key={education.id} className="education">
          <div className="uni-details">
            <strong>
              <p>{education.SchoolName}</p>
            </strong>

            <strong>
              <p>{education.Location}</p>
            </strong>
          </div>

          <div className="degree-details">
            <em>
              <p>{education.Degree}</p>
            </em>
            <div className="degree-period">
              <em>
                <p>
                  {education.StartDate} - {education.EndDate}
                </p>
              </em>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
