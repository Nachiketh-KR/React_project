import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Analytics from "./components/Analytics";
import { useEffect } from "react";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Main />
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer />
    
    </div>
  );
}

export default App;
