import { useState } from "react";

function CourseForm({ addCourse }) {
  const [courseName, setCourseName] = useState("");
  const [courseStatus, setCourseStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!courseName.trim()) {
      return;
    }

    addCourse(courseName, courseStatus);

    setCourseName("");
    setCourseStatus("Pending");
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 mb-4">

      <div className="row">

        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Course Name"
            value={courseName}
            onChange={(e) =>
              setCourseName(e.target.value)
            }
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={courseStatus}
            onChange={(e) =>
              setCourseStatus(e.target.value)
            }
          >
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>

        <div className="col-md-3">
          <button
            type="submit"
            className="btn btn-success w-100"
          >
            Add Course
          </button>
        </div>

      </div>

    </form>
  );
}

export default CourseForm;