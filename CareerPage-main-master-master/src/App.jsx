import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer";
import Header from "./components/Header";
import Explore from "./components/Explore";
import Forms from "./components/Form";
import Content from "./components/Content";
import Contact from "./components/Contact";

const App = () => {
  return (
    <section
      className="h-screen bg-Hero bg-no-repeat bg-cover
      font-[Poppins] md:bg-top bg-center">
      <Navbar />
      <Content />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* Header */}
      <div className="flex flex-col items-center ">
        <Header />
        {/* Explore Career Page */}
        <Explore />
      </div>
      {/* Form */}
      <Forms />
      <br></br>
      {/* Footer */}
      <Footer />
      <Contact />
    </section>
  );
};

export default App;
