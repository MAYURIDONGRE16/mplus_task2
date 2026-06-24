import Navbar from "../components/Navbar";

function Dashboard({ courses }) {
  const totalCourses = courses.length;

  const completedCourses = courses.filter(
    (course) => course.status === "Completed"
  ).length;

  const pendingCourses = courses.filter(
    (course) => course.status === "Pending"
  ).length;

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2 className="mb-4">
          Dashboard
        </h2>

        <div className="row">
          <div className="col-md-4">
            <div className="card shadow dashboard-card">
              <div className="card-body text-center">
                <h5>Total Courses</h5>
                <h2>{totalCourses}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow dashboard-card">
              <div className="card-body text-center">
                <h5>Completed Courses</h5>
                <h2>{completedCourses}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow dashboard-card">
              <div className="card-body text-center">
                <h5>Pending Courses</h5>
                <h2>{pendingCourses}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;