import React from "react";
import Header from './components/header';
import Footer from './components/footer';
import Copyright from './components/copyright';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <Copyright />
    </div>
  );
};

export default Layout;
