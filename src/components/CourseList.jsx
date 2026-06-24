function CourseList({
  courses,
  deleteCourse,
  editCourse,
}) {
  if (courses.length === 0) {
    return (
      <div className="alert alert-info">
        No courses found.
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped">

        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Course Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>

              <td>{course.name}</td>

              <td>
                <span
                  className={
                    course.status ===
                    "Completed"
                      ? "badge bg-success"
                      : "badge bg-warning text-dark"
                  }
                >
                  {course.status}
                </span>
              </td>

              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() =>
                    editCourse(course.id)
                  }
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    deleteCourse(course.id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default CourseList;