import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Point from "./pages/Point";
import About from "./pages/About";
import Footer from "./components/Footer";
import CreateCampaign from "./pages/CreateCampaign";
import Campaign from "./pages/Campaign";
import { CampaignProvider } from "./context/CampaignContext";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import { userSession, authenticate } from "./auth";

const App = () => {
  const isAuthenticated = userSession.isUserSignedIn();

  return (
    <CampaignProvider>
      <div className="overflow-x-hidden">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/points" element={<Point />} />
            <Route
              path="/create"
              element={
                isAuthenticated ? (
                  <CreateCampaign />
                ) : (
                  <div className="min-h-screen flex items-center justify-center text-white">
                    <button
                      onClick={authenticate}
                      className="bg-blue-800 hover:bg-blue-900 text-white py-3 px-6 rounded-md"
                    >
                      Sign In to Create a Campaign
                    </button>
                  </div>
                )
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/campaign" element={<Campaign />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CampaignProvider>
  );
};

export default App;
