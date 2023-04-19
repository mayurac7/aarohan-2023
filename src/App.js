import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Competitions from "./components/Competitions";
import Sponsors from "./components/Sponsors";
import Events from "./components/Events";
import Photos from "./components/Photos";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="Competitions" element={<Competitions />} />
              <Route path="Sponsors" element={<Sponsors />} />
              <Route path="Events" element={<Events />} />
              <Route path="Photos" element={<Photos />} />
              <Route path="ContactUs" element={<ContactUs />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
