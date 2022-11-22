import { Routes, Route } from "react-router-dom";
import { Trackers } from "./components/Trackers/Trackers";
import { Welcome } from "./components/Welcome/Welcome";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Welcome />} />
      <Route path="professionalTrackers" element={<Trackers />} />
      <Route path="mastersPrograms" element={<h1>master's programs</h1>} />
    </Routes>
  );
};
