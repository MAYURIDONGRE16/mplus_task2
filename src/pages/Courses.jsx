import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import CourseForm from "../components/CourseForm";
import CourseList from "../components/CourseList";
import SearchBar from "../components/SearchBar";

function Courses({
  courses,
  setCourses,
  loading,
  setLoading,
}) {
  const [searchText, setSearchText] =
    useState("");
    
  const [statusFilter, setStatusFilter] =
    useState("All");

  useEffect(() => {
    if (courses.length === 0) {
      setLoading(true);

      fetch(
        "https://jsonplaceholder.typicode.com/posts"
      )
        .then((response) => response.json())
        .then((data) => {
          const courseData = data
            .slice(0, 20)
            .map((item) => ({
              id: item.id,
              name: item.title,
              status:
                item.id % 2 === 0
                  ? "Completed"
                  : "Pending",
            }));

          setCourses(courseData);
        })
        .catch((error) => {
          console.log(
            "Error fetching courses:",
            error
          );
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [
    courses,
    setCourses,
    setLoading,
  ]);

  const addCourse = (name, status) => {
    const newCourse = {
      id: Date.now(),
      name,
      status,
    };

    setCourses([
      ...courses,
      newCourse,
    ]);
  };

  const deleteCourse = (id) => {
    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this course?"
      );

    if (!confirmDelete) {
      return;
    }

    const updatedCourses =
      courses.filter(
        (course) =>
          course.id !== id
      );

    setCourses(updatedCourses);
  };

  const editCourse = (id) => {
    const currentCourse =
      courses.find(
        (course) =>
          course.id === id
      );

    const newName = prompt(
      "Enter Course Name",
      currentCourse.name
    );

    if (!newName) {
      return;
    }

    let newStatus = prompt(
      "Enter Status (Completed or Pending)",
      currentCourse.status
    );

    if (!newStatus) {
      return;
    }

    newStatus =
      newStatus.charAt(0).toUpperCase() +
      newStatus.slice(1).toLowerCase();

    if (
      newStatus !==
        "Completed" &&
      newStatus !== "Pending"
    ) {
      alert(
        "Status must be Completed or Pending"
      );
      return;
    }

    const updatedCourses =
      courses.map((course) =>
        course.id === id
          ? {
              ...course,
              name: newName,
              status: newStatus,
            }
          : course
      );

    setCourses(updatedCourses);
  };

  const filteredCourses =
    courses.filter((course) => {
      const matchesSearch =
        course.name
          .toLowerCase()
          .includes(
            searchText.toLowerCase()
          );

      const matchesStatus =
        statusFilter === "All"
          ? true
          : course.status ===
            statusFilter;

      return (
        matchesSearch &&
        matchesStatus
      );
    });

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2 className="mb-4">
          Course Management
        </h2>

        <CourseForm
          addCourse={addCourse}
        />

        <SearchBar
          searchText={searchText}
          setSearchText={
            setSearchText
          }
          statusFilter={
            statusFilter
          }
          setStatusFilter={
            setStatusFilter
          }
        />

        {loading ? (
          <div className="text-center mt-4">
            <h5>
              Loading Courses...
            </h5>
          </div>
        ) : (
          <CourseList
            courses={
              filteredCourses
            }
            deleteCourse={
              deleteCourse
            }
            editCourse={
              editCourse
            }
          />
        )}
      </div>
    </>
  );
}

export default Courses;