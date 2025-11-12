import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};
// Outlet
// This will render the matched child route component //
//Outlet is a placeholder for where the child routes will be rendered
export default Layout;
