import {
  About,
  Header,
  Project,
  Projects,
  Skills,
  AboutMe,
} from "./containers";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectProvider from "./context/ProjectsContext";
import { CustomCursor, Navbar } from "./components";
import { BottomNav } from "./layout";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [inView, setInView] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  const imageDetails = {
    width: 300,
    height: 205,
  };
  return (
    <div className="bg-primary h-screen overflow-hidden px-20 pt-4 relative">
      {!loading && (
        <>
          <CustomCursor />
          <Navbar setOpen={setOpen} open={open} inView={inView} />
          <BottomNav open={open} setOpen={setOpen} />
        </>
      )}
      <AnimatePresence initial="false" mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Header
                imageDetails={imageDetails}
                loading={loading}
                setLoading={setLoading}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route
            path="/projects"
            element={
              <ProjectProvider>
                <Projects setInView={setInView} />
              </ProjectProvider>
            }
          />
          <Route
            path="/projects/:id"
            element={<Project inView={inView} setInView={setInView} />}
          />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
