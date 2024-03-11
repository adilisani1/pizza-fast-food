import Navbar from "./components/Navbar/Navbar"
import Hero from './components/Hero/Hero';
import Cards from './components/Cards/Cards';
// import Chefs from './components/Chefs/Chefs';
import Footer from './components/Footer/Footer';
import About from "./components/About/About";
import { useState } from "react";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from './components/Contact/Contact';
import Overlay from './utils/Overlay';


function App() {

  const [showMobileNav, setShowMobileNav] = useState(false);

  const [pizzas, setPizzas] = useState([
    {
      id: 1,
      name: "Mushroom Pizza",
      variants: ["small", "medium", "large"],
      prices: [
        { small: 400 },
        { medium: 800 },
        { large: 1000 }
      ],
      img: '/mashroom-pizza.png',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 2,
      name: "Olive Pizza",
      variants: ["small", "medium", "large"],
      prices: [
        { small: 400 },
        { medium: 800 },
        { large: 1000 }
      ],
      img: '/olive-pizza.png',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 3,
      name: "Sausage Pizza",
      variants: ["small", "medium", "large"],
      prices: [
        { small: 400 },
        { medium: 800 },
        { large: 1000 }
      ],
      img: '/sausage-pizza.png',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },

  ]
  );


  const [quantity, setQuantity] = useState(1);


  const pizzaDishes =
    pizzas.map((pizza) =>
      pizza.variants.map((variant) =>
        console.log(pizza.prices[2][variant] * quantity)));
  // Get the selected pizza and its price


  return (
    <>
      {showMobileNav && <Overlay />}
      <Navbar showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} />
      <div className={`min-h-screen`}>
        <section
          id="Home"
          className="!min-h-[60vh]"
          style={
            {
              backgroundImage: 'url("/hero-bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }
          }>
          <Hero />
        </section>
        <section id="About">
          <About />
        </section>
        <section id="Menu">
          <Cards pizzas={pizzas} />
        </section>
        <section id="Testimonials">
          <Testimonials />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </>
  )
}

export default App
