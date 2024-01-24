import Navbar from "./components/Navbar";
import Companies from "./sections/Companies";
import Hero from "./sections/Hero";
import WhyClearlink from "./sections/WhyClearlink";
import Testimonials from "./sections/Testimonials";
import FAQs from "./sections/FAQs";
import CTA from "./sections/CTA";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <WhyClearlink />
      <Testimonials />
      <FAQs />
      <CTA />
    </>
  );
}

export default App;
