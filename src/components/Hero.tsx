import { BrainCog } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <BrainCog  size={80} className="text-red-500"/> */}
      <h1 className="flex text-5xl justify-center text-center font-semibold px-10 md:w-full">Where Innovation <br/>Meets Excellence</h1>
      <p className="flex text-center p-8 text-xl font-normal text-gray-600">
        We're building the next generation of intelligent enterprise solutions.
        Transforming businesses through AI, analytics and travel technology
        solutions.
      </p>
    </div>
  );
};

export default Hero;
