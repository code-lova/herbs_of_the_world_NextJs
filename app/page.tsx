import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import ContactCrad from "@/components/ContactCrad";
import Disclaimer from "@/components/Disclaimer";
import { DiscountPromo } from "@/components/DiscountPromo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Subscription from "@/components/Subscription";
import TestimonialSlider from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="main">
      <Navbar />
      <section className="mt-20">
          <Hero />
      </section>
      <section className="xl:px-40 px-5 py-9 bg-gray-100">
        <Banner />
      </section>
      <section className="xl:px-40 py-9">
        <Products/>
      </section>
      <section className="xl:px-40 py-9 bg-gray-100">
        <DiscountPromo/>
      </section>
      <section className="xl:px-40 py-9">
        <AboutUs />
      </section>
      <section className="xl:px-40 py-9">
        <TestimonialSlider />
        <div className="py-6 bg-gray-50">
          <Disclaimer />
        </div>
      </section>
      <section className="xl:px-40 py-9">
        <ContactCrad />
      </section>
      <section className="xl:px-40 py-9 bg-gray-100">
        <Subscription />
      </section>
      <section className="xl:px-40 py-9 bg-green-900">
        <Footer />
      </section>


    </main>
  );
}
