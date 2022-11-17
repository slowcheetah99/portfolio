import { useState } from "react";
import {
  About,
  Footer,
  Header,
  Project,
  Projects,
  Skills,
  AboutMe,
  Testimonials,
} from "./containers";
import { Navbar, CustomCursor } from "./components";
import { Routes, Route } from "react-router-dom";
import { BottomNav } from "./layout/";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-primary max-h-screen overflow-hidden px-20 py-4 relative">
      <Navbar setOpen={setOpen} open={open} />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
      <BottomNav open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
