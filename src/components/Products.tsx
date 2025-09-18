import { Card, CardContent } from "./ui/card";
import datas from "../../data.json";
import { ChevronRight } from "lucide-react";
import {motion} from 'motion/react'
import { toast } from "sonner";

const Products = () => {
  return (
    
    <div className=" py-44 pt-20 md:pt-40" id="product">
     
      <div className="space-y-12">
        {datas.products.map((data, index) => (
          <Card
            key={index}
            className=" w-full shadow-none border-none rounded-lg flex justify-evenly"
          >
            <motion.div initial={{opacity:0,scale:0.9}} whileInView={{opacity:1,scale:1}} transition={{duration:2}}>

            <CardContent>
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row': 'md:flex-row-reverse'}  justify-between items-center gap-6 py-8`}>
                <div className="flex flex-col items-center gap-4">
                  <p className="items-start">Product {`#${index+1}`}</p>
                  <h2 className="flex justify-center max-w-lg item text-center font-bold text-3xl">
                    {data.name}
                  </h2>
                  <p className="flex justify-center max-w-lg text-center px-2 font-light text-gray-600">
                    {data.description}
                  </p>
                  <a href="#contact" onClick={()=> toast.success('Please Contact us to Book for a Demo')} className="w-20 h-8 flex justify-center items-center shadow-lg border rounded-3xl">
                    <p className="flex items-center justify-center" >Visit  <ChevronRight size={15} className="text-xs"/></p>
                  </a>
                </div>
              <img
                src={data.image}
                alt="img"
                key={index}
                className=" text-center w-full h-full object-cover md:w-96"
                />
                </div>
            </CardContent>
            </motion.div>

          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
