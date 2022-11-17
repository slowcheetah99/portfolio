import {
  About,
  Header,
  Project,
  Projects,
  Skills,
  AboutMe,
} from "./containers";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2700);
  });
  const imageDetails = {
    width: 300,
    height: 205,
  };
  return (
    <div className="bg-primary max-h-screen overflow-hidden px-20 py-4 relative">
      <Routes>
        {/* work on removing the header from the loading page/screen */}
        <Route
          path="/"
          element={<Header imageDetails={imageDetails} loading={loading} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
