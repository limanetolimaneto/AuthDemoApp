import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./pages/login";
import Register from "./pages/Register";

export default function App() {
  // App component with React Router
  return (
    <BrowserRouter>
      {/* Wrap all pages in Layout for consistent header/footer */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
