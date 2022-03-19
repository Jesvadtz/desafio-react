import React from "react";
import Navbar from "../components/Nav/Nav";

function Layout() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <AsideLeft />
        <SectionPost />
        <AdsideRight />
      </Main>
      <Footer />
    </>
  );
}

export default Layout;
