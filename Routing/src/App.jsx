import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import AuthRequired from "./components/AuthRequired";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route element={<AuthRequired />}>
            <Route
              path="protected"
              element={<h1>Super secret infos here </h1>}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
