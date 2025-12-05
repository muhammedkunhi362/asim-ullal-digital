import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import Index from "@/pages/Index";
import About from "@/pages/About";
import PracticeAreas from "@/pages/PracticeAreas";
import BookConsultation from "@/pages/BookConsultation";
import AskQuestion from "@/pages/AskQuestion";
import IBizlaw from "@/pages/IBizlaw";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/practice-areas"
          element={
            <PageTransition>
              <PracticeAreas />
            </PageTransition>
          }
        />
        <Route
          path="/book-consultation"
          element={
            <PageTransition>
              <BookConsultation />
            </PageTransition>
          }
        />
        <Route
          path="/ask-question"
          element={
            <PageTransition>
              <AskQuestion />
            </PageTransition>
          }
        />
        <Route
          path="/ibizlaw"
          element={
            <PageTransition>
              <IBizlaw />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
