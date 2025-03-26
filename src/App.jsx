import { useState, useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import {
  Contact,
  Home,
  Projects,
  AboutPerso,
  AboutPro,
} from "./pages/index.js";
import { AnimatePresence } from "framer-motion";
import { Layout } from "./components/Layout";

function App() {
  const location = useLocation();
  const [background, setBackground] = useState("bg-stone-900");

  useEffect(() => {
    setBackground("bg-stone-900");
  }, [location]);

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        <Layout background={background}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home setBackground={setBackground} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/aboutpro" element={<AboutPro />} />
            <Route path="/aboutperso" element={<AboutPerso />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </AnimatePresence>
    </>
  );
}

export default App;
