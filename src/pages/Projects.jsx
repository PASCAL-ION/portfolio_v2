import { Card } from "../components/Card";
import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { AnimatePresence, motion } from "framer-motion"; // Import Framer Motion

export function Projects() {
  const [data, setData] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center min-h-screen py-12">
      <div className="text-center max-w-4xl mx-auto mb-8 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Mes Projets
        </h1>
      </div>

      <Box className="p-6 mb-8 mt-8">
        <Tabs
          centered
          value={tabIndex}
          onChange={(e, newValue) => setTabIndex(newValue)}
          TabIndicatorProps={{
            style: {
              background: "white",
              height: "4px",
              borderRadius: "2px",
            },
          }}
        >
          {["Tous les projets", "Top-projets", "Mini-projets"].map((label, index) => (
            <Tab
              key={index}
              label={label}
              sx={{
                color: "white",
                backgroundColor: tabIndex === index ? "white" : "black",
                transition: "all 0.3s ease",
                "&.Mui-selected": { color: "black" },
                "&:hover": { backgroundColor: "white", color: "black" },
              }}
            />
          ))}
        </Tabs>
      </Box>

      <Box className="w-full flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={tabIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4"
          >
            {data
              .filter((project) => tabIndex === 0 || project.category === (tabIndex === 1 ? "top" : "mini"))
              .map((project) => (
                <Card key={project.id} projectDetails={project} />
              ))}
          </motion.div>
        </AnimatePresence>
      </Box>
    </div>
  );
}