import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Info from "./pages/Info/Info";
import { Route, Routes } from "react-router-dom";
import Screenshots from "./pages/Screenshots/Screenshots";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import End from "./components/End/End";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/screenshots/:game" element={<Screenshots />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/end" element={<End/>} />
      </Routes>
    </>
  );
}

export default App;
