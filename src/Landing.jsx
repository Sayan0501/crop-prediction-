import React from "react";
import { Link } from "react-router-dom";
import Aboutus from "./Aboutus";
import Blog from "./blog/Blog";

function Landing() {
  return (
    <>
      <main className="flex-grow">
        <header className="py-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex-grow">
              <nav className="flex justify-center space-x-8 font-bold">
                <Link to="/" className="text-gray-700 hover:text-green-600">
                  Home
                </Link>
                <Link to="/know" className="text-gray-700 hover:text-green-600">
                  About
                </Link>
                <Link
                  to="/blog1"
                  className="text-gray-700 hover:text-green-600"
                >
                  Blog
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <section
          className="relative bg-cover bg-center h-[90vh]"
          style={{
            backgroundImage: "url(public/Row_Crops_0463-M-MPIX-Test.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container mx-auto flex flex-col items-start justify-center h-full text-white px-6">
            <h1 className="text-4xl font-bold">Agriculture & Eco Farming</h1>
            <p className="mt-4 max-w-md">
              There are many of passages of lorem ipsum, but the majority have
              suffered alteration in some form.
            </p>
            <Link
              to="/crop"
              className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500 font-semibold"
            >
              Predict Your Crops
            </Link>
          </div>
        </section>
      </main>

      <Aboutus />
      <Blog />
    </>
  );
}

export default Landing;
