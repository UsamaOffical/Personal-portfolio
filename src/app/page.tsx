import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      {/* main bg #1c2541
      <p>second bg #3a506b</p>
      <p>color for text #489fb5</p>
      <p>color for text complete #f6f6f6</p> */}
      <Navbar/>
      <Hero/>
    </div>
  );
}
