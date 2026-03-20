import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      
      <main style={{ padding: "1rem", minHeight: "80vh" }}>
        {children}
      </main>

      <footer style={{ 
        textAlign: "center", 
        padding: "1rem", 
        borderTop: "1px solid #ccc" 
      }}>
        <p>© 2025 Pousada Pedra Furada</p>
      </footer>
    </div>
  );
}