import { About, Header, Project, Projects, AboutMe } from "./containers";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectProvider from "./context/ProjectsContext";
import { CustomCursor, Navbar } from "./components";
import { AnimatePresence } from "framer-motion";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const IS_DEVELOPMENT = import.meta.env.MODE === "development";
//apollo client
const client = new ApolloClient({
  uri: IS_DEVELOPMENT
    ? "http://localhost:1337/graphql"
    : "https://56f3-102-140-210-249.eu.ngrok.io/graphql",
  cache: new InMemoryCache(),
});
function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [inView, setInView] = useState(false);
  const [open, setOpen] = useState(false);
  const [pointers, setPointers] = useState(false);

  useEffect(() => {
    setPointers(true);
    setLoading(true);
  }, []);
  const imageDetails = {
    width: 300,
    height: 205,
  };
  return (
    <div
      className={`bg-slate-100 outline outline-offset-8 outline-secondary h-screen w-screen md:overflow-hidden px-20 pt-4 relative ${
        pointers ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <CustomCursor />
      <Navbar
        setOpen={setOpen}
        open={open}
        inView={inView}
        pointers={pointers}
      />
      {/* <Burger setOpen={setOpen} open={open} inView={inView} /> */}
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
              <ApolloProvider client={client}>
                <ProjectProvider>
                  <Projects setInView={setInView} />
                </ProjectProvider>
              </ApolloProvider>
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
