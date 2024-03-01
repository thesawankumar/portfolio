import Navbar from "../components/Navbar";
import { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import Hero from "../components/Hero";

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xfc6736,
          backgroundColor: 0xefecec,
          points: 15.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section id="home" ref={myRef} className="h-full lg:h-screen">
      <Navbar />
      <Hero />
    </section>
  );
};

export default Home;
