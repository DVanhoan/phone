import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/Home";
import Header from "./components/common/Header";
import Notfound from "./pages/errors/Notfound";
import Fobidden from "./pages/errors/Fobidden";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="*"
            element={<Notfound />}
          />
          <Route
            path="/403"
            element={<Fobidden />}
          />

        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
