
import React, { useState } from 'react';


const Semesters = () => {
  const [openSemester, setOpenSemester] = useState(null);

  const semesters = [
    {
      semester: "Semester 1",
      subjects: [
        { name: "Introduction to Programming", code: "CS101" },
        { name: "Mathematics I", code: "MATH101" },
        { name: "English Communication", code: "ENG101" },
      ]
    },
    {
      semester: "Semester 2",
      subjects: [
        { name: "Data Structures", code: "CS102" },
        { name: "Mathematics II", code: "MATH102" },
        { name: "Computer Organization", code: "CS103" },
      ]
    },
    {
      semester: "Semester 3",
      subjects: [
        { name: "Database Systems", code: "CS201" },
        { name: "Operating Systems", code: "CS202" },
        { name: "Software Engineering", code: "CS203" },
      ]
    },
    {
        semester: "Semester 4",
        subjects: [
          { name: "Java Programming", code: "CS205" },
          { name: "Network Security", code: "CS302" },
          { name: "Computer Fundamentals", code: "CS303" },
        ]
      },
   
  ];

  const handleToggle = (index) => {
    setOpenSemester(openSemester === index ? null : index);
  };

  return (
    <div className="semester-subjects">
      <h1> Course Structure</h1>
      {semesters.map((semester, index) => (
        <div key={index} className="semester-card">
          <div
            className="semester-header"
            onClick={() => handleToggle(index)}
          >
            <h2 className="semester-title">{semester.semester}</h2>
            <span className="toggle-icon">
              {openSemester === index ? '-' : '+'}
            </span>
          </div>
          {openSemester === index && (
            <ul className="subject-list">
              {semester.subjects.map((subject, idx) => (
                <li key={idx} className="subject-item">
                  <span className="subject-name">{subject.name}</span>
                  <span className="subject-code">{subject.code}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default Semesters;
