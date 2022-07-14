import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminHomePage } from "../AdminHomePage";
import { ApplicationFormPage } from "../ApplicationFormPage";
import { CreateTripPage } from "../CreateTripPage";
import { HomePage } from "../HomePage";
import { ListTripsPage } from "../ListTripsPage";
import { LoginPage } from "../LoginPage";
import { TripDetailsPage } from "../TripDetailsPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        {/* <Route path="/home" element={<HomePage />} /> */}
        <Route path="/trips/list" element={<ListTripsPage />} />
        <Route path="/trips/application" element={<ApplicationFormPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/trips/list" element={<AdminHomePage />} />
        <Route path="/admin/trips/create" element={<CreateTripPage />} />
        <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
