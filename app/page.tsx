import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="main">
      <Navbar />
      <section className="mt-20">
          <Hero />
      </section>
      <section className="xl:px-40 px-5 py-9">
        <Banner />
      </section>

    </main>
  );
}
