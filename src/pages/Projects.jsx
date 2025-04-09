import { Card } from "../components/Card";
import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { AnimatePresence, motion } from "framer-motion";

export function Projects() {
  const [data, setData] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // Start loading
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false); // Stop loading
      });
  }, []);

  const handleTabChange = (e, newValue) => {
    setTabIndex(newValue);
    setLoading(true); // Start loading when tab changes
    setTimeout(() => setLoading(false), 500); // Simulate loading delay
  };

  return (
    <div className="flex-1 flex flex-col items-center min-h-screen py-12 px-4 sm:px-6">
      <div className="text-center max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">
          Mes Projets
        </h1>
        <p className="italic text-xs mt-4">
          (Certains projets ne sont pas encore disponibles en ligne, mais je fais le nécessaire pour y remédier. En attendant, j’ai enregistré une courte vidéo sur la page de chaque projet pour les présenter.)
        </p>
      </div>
      <Box className="w-full overflow-x-auto p-4 mb-8 flex justify-center">
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          TabIndicatorProps={{
            style: {
              background: "white",
              height: "4px",
              borderRadius: "2px",
            },
          }}
          variant="scrollable"
          scrollButtons="auto"
        >
          {["Tous les projets", "Top-projets", "Mini-projets", "Projets en cours"].map((label, index) => (
            <Tab
              key={index}
              label={label}
              sx={{
                color: "white",
                backgroundColor: tabIndex === index ? "white" : "black",
                transition: "all 0.3s ease",
                "&.Mui-selected": { color: "black" },
                "&:hover": { backgroundColor: "white", color: "black" },
                minWidth: "auto",
                padding: "6px 12px",
              }}
            />
          ))}
        </Tabs>
      </Box>

      <Box className="w-full flex justify-center">
        {loading ? (
          // Loading animation
          <div className="flex items-center justify-center h-64">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={tabIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4"
            >
              {data
                .filter((project) => {
                  if (tabIndex === 0) return project.finished !== false; // All finished projects
                  if (tabIndex === 1) return project.category === "top" && project.finished !== false; // Top projects that are finished
                  if (tabIndex === 2) return project.category === "mini" && project.finished !== false; // Mini projects that are finished
                  if (tabIndex === 3) return project.finished === false; // Unfinished projects
                  return false;
                })
                .map((project) => (
                  <Card key={project.id} projectDetails={project} />
                ))}
            </motion.div>
          </AnimatePresence>
        )}
      </Box>
    </div>
  );
}