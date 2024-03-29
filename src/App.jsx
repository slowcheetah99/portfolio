import { About, Header, Project, Projects, Loading } from "./containers";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectProvider from "./context/ProjectsContext";
import { CustomCursor, Navbar } from "./components";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [inView, setInView] = useState(false);
  const [open, setOpen] = useState(false);
  const [pointers, setPointers] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setPointers(true);
  }, []);
  const imageDetails = {
    width: 300,
    height: 205,
  };

  if (loading) return <Loading setLoading={setLoading} />;
  return (
    <div
      className={`bg-slate-100 outline outline-offset-8 outline-secondary h-screen w-screen overflow-hidden px-20 pt-4 relative ${
        pointers ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <CustomCursor />
      <Navbar
        setOpen={setOpen}
        open={open}
        inView={inView}
        pointers={pointers}
        setShowNav={setShowNav}
        showNav={showNav}
      />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Header
                imageDetails={imageDetails}
                loading={loading}
                setLoading={setLoading}
                pointers={pointers}
                setPointers={setPointers}
              />
            }
          />
          <Route path="/about" element={<About />} />
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
          {/* <Route path="/load" element={<Loading />} /> */}
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
