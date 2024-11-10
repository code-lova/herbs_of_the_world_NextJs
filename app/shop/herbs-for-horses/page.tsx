import React from "react";
import HerbsForHorses from "@/components/shop/horses/HerbsForHorses";
import Navbar from "@/components/homepage/Navbar";
import HeroBanner from "@/components/shop/HeroBanner";

const Page = () => {
  return (
    <>
      <main className="main">
        <Navbar />
        <section className="mt-40">
          <HeroBanner />
        </section>
        <section className="xl:px-40 py-9">
          <HerbsForHorses />
        </section>
      </main>
    </>
  );
};

export default Page;
