import { Routes, Route } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { _blank } from "./actions/_blnak";

import Navbar1 from "./components/Navbar-v1";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const _default = useSelector((state) => state._default);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "DEFAULT", payload: "eheh" });
    dispatch(_blank());
  }, [])
  return (
    <div className="App">
      <Navbar1 />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
