import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      
      <header className="mb-16">
         <Navbar></Navbar>
       </header>
       <main>
         <Outlet></Outlet>
       </main>
       <footer>
         <Footer></Footer>
       </footer>
    </div>
  );
};

export default MainLayout;