import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import TheOffice from "../pages/TheOffice";
import Partner from "../pages/Partner";
import Activity from "../pages/Activity";
import Articles from "../pages/Articles";
import Article from "../pages/Article";
import Contacts from "../pages/Contacts";

import WorkUs from "../pages/WorkUs";
import BePartner from "../pages/BePartner";
import ContactActivity from "../pages/ContactActivity";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/office" element={<TheOffice />} />
      <Route path="/partner" element={<Partner />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/activity/:activity" element={<ContactActivity />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<Article />} />
      <Route path="/contacts" element={<Contacts />} />

      <Route path="/work-us" element={<WorkUs />} />
      <Route path="/be-partner" element={<BePartner />} />
    </Routes>
  );
};

export default RoutesApp;
