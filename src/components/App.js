import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className="app">
      <Header />
      <ErrorBoundary>
        <PlantPage />
      </ErrorBoundary>
    </div>
  );
}

export default App;
