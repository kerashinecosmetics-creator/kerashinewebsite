import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Products from "./components/Products";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* FIXED: gap se har section ke beech mein space */}
      <main className="flex flex-col gap-0">
        <Hero />
        <div className="py-10 md:py-16" />
        <About />
        <div className="py-10 md:py-16" />
        <Process />
        <div className="py-10 md:py-16" />
        <Products />
        <div className="py-10 md:py-16" />
        <Services />
        <div className="py-10 md:py-16" />
        <Gallery />
        <div className="py-10 md:py-16" />
        <Testimonials />
        <div className="py-10 md:py-16" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}