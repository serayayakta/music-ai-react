import { useState } from "react";
import HomePage from "./components/HomePage.jsx";
import ChartPage from "./components/ChartPage.jsx";
import SettingsPage from "./components/SettingsPage.jsx";

function App() {
  const [selectedTab, setSelectedTab] = useState("settings");

  const renderPage = () => {
    switch (selectedTab) {
      case "home":
        return <HomePage />;
      case "chart":
        return <ChartPage />;
      case "settings":
        return <SettingsPage />;
    }
  };

  return (
    <div className="flex flex-col h-screen mx-6">
      {renderPage()}
      <nav className="flex items-center justify-between px-15 py-4 h-14 w-[327px] bg-[#262626] fixed bottom-5 rounded-lg">
        <button onClick={() => setSelectedTab("home")}>
          <img src="home.svg" alt="Home" />
        </button>
        <button onClick={() => setSelectedTab("chart")}>
          <img src="chart.svg" alt="Chart" />
        </button>
        <button onClick={() => setSelectedTab("settings")}>
          <img src="setting.svg" alt="Settings" />
        </button>
      </nav>
    </div>
  );
}

export default App;
