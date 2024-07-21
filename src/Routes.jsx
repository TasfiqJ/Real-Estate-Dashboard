import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DesktopOne = React.lazy(() => import("pages/DesktopOne"));
const Login = React.lazy(() => import("pages/Login"));
const Signup = React.lazy(() => import("pages/Signup"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/desktopone" element={<DesktopOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
