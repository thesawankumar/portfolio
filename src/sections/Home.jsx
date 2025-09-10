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
          color: 0xfc6736, // Orange-ish lines
          backgroundColor: 0xefecec, // Light background
          points: 15.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section
      id="home"
      ref={myRef}
      className="relative min-h-screen w-full flex flex-col"
    >
      {/* Navbar always on top */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero section */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <Hero />
      </div>
    </section>
  );
};

export default Home;
