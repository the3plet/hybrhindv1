import data from "../../data.json";
import { motion } from "framer-motion";


const Technology = () => {
  return (
    <div className="pt-40 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-200">
        Our Tech Stack
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
        {data.tech.map((logo, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8,x:-20 }}
            whileInView={{
              opacity: 1,
              scale: 1,x:0,
              transition: { duration: 0.7, ease: "easeOut" },
            }}
            key={index}
            className="flex flex-col items-center justify-center rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={logo.file}
              alt={logo.name}
              className="w-14 md:w-16 h-16 object-contain transition-all duration-200 transform hover:scale-110"
            />
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
              {logo.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
