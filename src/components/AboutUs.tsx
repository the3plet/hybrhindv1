import datas from "../../data.json";
import { motion } from "motion/react";

const AboutUs = () => {
  return (
    <motion.div id="about"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="px-10 md:px-[35vh] gap-14 flex flex-col pb-28"  >
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-start text-4xl md:text-5xl font-normal "
          >
            Mission and Vision
          </motion.h2>
          <div className="md:flex gap-4">
            {datas.aboutUs.map((data, index) => (
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                key={index}
                className=" text-xl font-extralight font-Karla py-4"
              >
                {data.description}
              </motion.p>
            ))}
          </div>
        </div>
        {/* <IconScroll /> */}

        <div>
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-start text-4xl md:text-5xl font-normal "
          >
            Our Promoter
          </motion.h2>
          <div className="md:flex gap-4">
            {datas.promoters.map((data, index) => (
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                key={index}
                className=" text-xl font-extralight font-Karla py-4"
              >
                {data.description}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
