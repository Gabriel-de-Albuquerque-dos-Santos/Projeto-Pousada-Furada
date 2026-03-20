import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      
      <main style={{ padding: "1rem", minHeight: "80vh" }}>
        {children}
      </main>

      <Footer />
    </div>
  );
}