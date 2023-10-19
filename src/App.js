import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import NavBar from "./components/navigation-bar/NavBar";
import Shop from "./components/shop/Shop";
import AuthenticationPage from "./components/authentication/AuthenticationPage";
import CheckOut from "./components/checkout/CheckOut";



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<AuthenticationPage />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </Router>
  );
}

export default App;
