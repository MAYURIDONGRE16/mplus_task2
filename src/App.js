import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";

import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {

  const [courses, setCourses] = useState(() => {
    const savedCourses =
      localStorage.getItem("courses");

    return savedCourses
      ? JSON.parse(savedCourses)
      : [];
  });

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    localStorage.setItem(
      "courses",
      JSON.stringify(courses)
    );
  }, [courses]);

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard
                courses={courses}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <Courses
                courses={courses}
                setCourses={setCourses}
                loading={loading}
                setLoading={setLoading}
              />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}



export default App;