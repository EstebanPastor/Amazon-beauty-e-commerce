import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Slider from "./components/slider/Slider";
import Virtual from "./components/virtual/Virtual";
import Products from "./components/products/Products";
import Testimonials from "./components/testimonials/Testimonials";
import "./App.css";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
