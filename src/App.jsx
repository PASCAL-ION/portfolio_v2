import { useState, useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Contact,
  Home,
  Projects,
  AboutPerso,
  AboutPro,
  ProjectDetail
} from "./pages/index.js";
import { Layout } from "./components/Layout";
import {Loader} from "./components/Loader";

function App() {
  const location = useLocation();
  const [background, setBackground] = useState("bg-[#0C0C0C]");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (hasVisited) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        localStorage.setItem("hasVisited", "true");
      }, 1500);
    }
  }, []);

  useEffect(() => {
    setBackground("bg-[#0C0C0C]");
  }, [location]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence initial={false} mode="wait">
        <Layout background={background}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home setBackground={setBackground} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
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
