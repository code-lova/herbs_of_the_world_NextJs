import AboutUs from "@/components/homepage/AboutUs";
import Banner from "@/components/homepage/Banner";
import ContactCrad from "@/components/homepage/ContactCrad";
import Disclaimer from "@/components/homepage/Disclaimer";
import { DiscountPromo } from "@/components/homepage/DiscountPromo";
import Footer from "@/components/homepage/Footer";
import Hero from "@/components/homepage/Hero";
import Navbar from "@/components/homepage/Navbar";
import Products from "@/components/homepage/Products";
import Subscription from "@/components/homepage/Subscription";
import TestimonialSlider from "@/components/homepage/Testimonial";

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
        <Products />
      </section>
      <section className="xl:px-40 py-9 bg-gray-100">
        <DiscountPromo />
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
