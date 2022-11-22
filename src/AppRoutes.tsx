import { Routes, Route } from "react-router-dom";
import { Programs } from "./components/Programs/Programs";
import { Total } from "./components/Total/Total";
import { Trackers } from "./components/Trackers/Trackers";
import { Welcome } from "./components/Welcome/Welcome";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Welcome />} />
      <Route path="professionalTrackers" element={<Trackers />} />
      <Route path="mastersPrograms" element={<Programs />} />
      <Route path="total" element={<Total />} />
    </Routes>
  );
};
