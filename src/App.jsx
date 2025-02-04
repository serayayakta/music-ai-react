import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import ChartPage from "./components/ChartPage.jsx";
import SettingsPage from "./components/SettingsPage.jsx";
import SubscriptionPage from "./components/SubscriptionPage.jsx";
import ProfilePage from "./components/ProfilePage.jsx";

import { useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <nav className="flex items-center justify-between px-15 py-4 h-14 w-[327px] bg-[#262626] fixed bottom-5 rounded-lg">
        <button onClick={() => navigate("/")}>
          <img src="home.svg" alt="Home" />
        </button>
        <button onClick={() => navigate("/chart")}>
          <img src="chart.svg" alt="Chart" />
        </button>
        <button onClick={() => navigate("/settings")}>
          <img src="setting.svg" alt="Settings" />
        </button>
      </nav>
    </div>
  );
};

const NavigationWrapper = () => {
  const location = useLocation();
  const showNavigation = ["/", "/chart", "/settings"].includes(
    location.pathname
  );

  return showNavigation ? <Navigation /> : null;
};

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chart" element={<ChartPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/subscriptions" element={<SubscriptionPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>

        <NavigationWrapper />
      </div>
    </Router>
  );
}

export default App;
