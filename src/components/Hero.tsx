import { BrainCog } from "lucide-react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <BrainCog  size={80} className="text-red-500"/>
      {/* <img src="/hero.png" alt=""/> */}
      
        <motion.h1 initial={{ opacity: 0,y:-20 }}
        animate={{ opacity: 1 , y:0}}
        transition={{ duration: 0.6 }} className=" text-6xl text-center font-semibold px-10 md:w-full">
          Where <span className="text-red-500">Innovation</span> <br />
          Meets Excellence
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }} className="flex text-center p-8 text-xl font-normal drop-shadow-lg text-gray-600">
          We're building the next generation of intelligent enterprise
          solutions. Transforming businesses through AI, analytics and travel
          technology solutions.
        </motion.p>
   
    </div>
  );
};

export default Hero;
