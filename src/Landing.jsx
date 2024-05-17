import React from "react";

function Landing() {
  return (
    <>
      <main className="flex-grow">
        <section
          className="relative bg-cover bg-center h-[70vh]"
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
            <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500 font-semibold">
              Predict Your Crops
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Landing;
