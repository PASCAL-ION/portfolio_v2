import { Routes, Route } from "react-router-dom";
import {Contact, Home, Projects, AboutPerso, AboutPro} from "./pages/index.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/aboutpro" element={<AboutPro/>}/>
        <Route path="/aboutperso" element={<AboutPerso/>}/>
      </Routes>
    </>
  )
}

export default App