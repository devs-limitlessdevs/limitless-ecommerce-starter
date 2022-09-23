import * as React from "react";
import { Link, HeadFC } from "gatsby";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Hero from "../components/404/Hero";

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <main className="404-page">
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
