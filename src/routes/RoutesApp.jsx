import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const TheOffice = lazy(() => import("../pages/TheOffice"));
const Partner = lazy(() => import("../pages/Partner"));
const Activity = lazy(() => import("../pages/Activity"));
const Articles = lazy(() => import("../pages/Articles"));
const Article = lazy(() => import("../pages/Article"));
const Contacts = lazy(() => import("../pages/Contacts"));
const WorkUs = lazy(() => import("../pages/WorkUs"));
const BePartner = lazy(() => import("../pages/BePartner"));
const ContactActivity = lazy(() => import("../pages/ContactActivity"));

const RoutesApp = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/office" element={<TheOffice />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/activity/:activity" element={<ContactActivity />} />
        <Route path="/articles" element={<Articles isPage={true} />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/work-us" element={<WorkUs />} />
        <Route path="/be-partner" element={<BePartner />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesApp;
