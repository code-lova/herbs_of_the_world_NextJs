import React from "react";
import HerbsForHorses from "@/components/shop/horses/HerbsForHorses";
import Navbar from "@/components/homepage/Navbar";
import HeroBanner from "@/components/shop/HeroBanner";

const Page = () => {
  return (
    <>
      <main className="main">
        <Navbar />
        <section className="py-24">
          <HeroBanner title="Herbs for horses"/>
        </section>
        <section className="xl:px-24">
          <HerbsForHorses />
        </section>
      </main>
    </>
  );
};

export default Page;
