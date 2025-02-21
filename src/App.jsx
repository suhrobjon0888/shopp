import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/Blog.jsx";
import Menu from "./components/Menu.jsx";
import Contend from "./components/Contend.jsx";
import Pricing from "./components/Pricing.jsx";
import Footer from "./components/Footer.jsx";
import Home from './pages/Home.jsx';
import Login from "../src/components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Sigin from "./components/Sigin.jsx";
import All from "./components/All.jsx";
import Layout from "./components/Layout.jsx";
import Blogimg from "./components/Blogimg.jsx";
import ImagePage from "./components/Imagepage.jsx";

function App() {
  return (
    <div className="bg-[#F9F9F9]">
      <main>
      <Routes>
          <Route path="/" element={<Layout><Home/></Layout>} />
          <Route path="/menu" element={<Layout><Menu /></Layout>} />
          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/pricing" element={ <Layout><Pricing/></Layout>} />
          <Route path="/contact" element={<Layout><Contend /></Layout>} />
          <Route path="/login" element={<Login />} />
           <Route path="/Signup" element={<Signup/>}/>
           <Route path="/Sigin" element={<Sigin/>}/>
           <Route path="/Blogimg/:id" element={<Layout><Blogimg /></Layout> }/>
          <Route path="/all" element={<Layout><All/></Layout>} />
          <Route path="/image/:id" element={<Layout><ImagePage/></Layout>} />
        </Routes>   
      </main>
    </div>
  );
}

export default App;
