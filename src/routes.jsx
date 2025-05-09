import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/home"));
const AboutUs = lazy(() => import("./pages/aboutus"));
const StudyDestination = lazy(() => import("./components/studydestination"));
const StudyinUK = lazy(() => import("./components/StudyinUK"));
const StudyinUSA = lazy(() => import("./components/StudyinUSA"));
const StudyinAustralia = lazy(() => import("./components/StudyinAustralia"));
const StudyinCanada = lazy(() => import("./components/StudyinCanada"));
const StudyinFrance = lazy(() => import("./components/StudyinFrance"));
const StudyinMalta = lazy(() => import("./components/StudyinMalta"));
const StudyinPoland = lazy(() => import("./components/StudyinPoland"));
const StudyinHungary = lazy(() => import("./components/StudyinHungary"));
const StudyinDubai = lazy(() => import("./components/StudyinDubai"));
const OurServices = lazy(() => import("./components/ourservices"));
const Blogs = lazy(() => import("./components/blogs"));
const BookAnApoinment = lazy(() => import("./components/BookAnApoinment"));
const FreeAssisment = lazy(() => import("./components/freeassisment"));
const GetQoute = lazy(() => import("./components/GetQoute"));
const ContactUs = lazy(() => import("./components/contactus"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AppRoutes = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/study-destination" element={<StudyDestination />} />
      <Route path="/study-destination/uk" element={<StudyinUK />} />
      <Route path="/study-destination/usa" element={<StudyinUSA />} />
      <Route path="/study-destination/australia" element={<StudyinAustralia />} />
      <Route path="/study-destination/canada" element={<StudyinCanada />} />
      <Route path="/study-destination/france" element={<StudyinFrance />} />
      <Route path="/study-destination/malta" element={<StudyinMalta />} />
      <Route path="/study-destination/poland" element={<StudyinPoland />} />
      <Route path="/study-destination/hungary" element={<StudyinHungary />} />
      <Route path="/study-destination/dubai" element={<StudyinDubai />} />
      <Route path="/our-services" element={<OurServices />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/book-an-appointment" element={<BookAnApoinment />} />
      <Route path="/free-assessment" element={<FreeAssisment />} />
      <Route path="/get-quote" element={<GetQoute />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
