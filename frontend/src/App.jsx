import { Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";
// import { useQuery } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import Header from "./components/common/Header";

function App() {


  return (

    <div>
      <Header />
      <div className="container p-20">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
