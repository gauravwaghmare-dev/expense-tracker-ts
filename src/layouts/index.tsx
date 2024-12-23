import React from "react";
import Topbar from "./components/Topbar";
import Container from "./components/Container";

const Layout = () => {
  return (
    <div className="layout-container">
      <Topbar />
      <Container />
    </div>
  );
};

export default Layout;
