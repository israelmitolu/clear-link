import Navbar from "./components/Navbar";
import Companies from "./sections/Companies";
import Hero from "./sections/Hero";
import WhyClearlink from "./sections/WhyClearlink";
import Testimonials from "./sections/Testimonials";
import FAQs from "./sections/FAQs";
import CTA from "./sections/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    // <main className="max-w-[1778px] mx-auto">
    <main className="main max-w-[1778px] mx-auto overflow-x-hidden">
      <Navbar />
      <Hero />
      <Companies />
      <WhyClearlink />
      <Testimonials />
      <FAQs />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
