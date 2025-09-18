import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const solutions = [
  {
    image: "/solutions/image1.png",
    title: "Forex ERP Solutions",
    description:
      "Integrated systems designed to streamline and automate foreign exchange (FX) operations, compliance, and risk management within an organization. These systems help businesses manage their FX exposures, automate trading processes, and ensure adherence to regulatory requirements, ultimately improving efficiency and reducing risks",
  },
  {
    image: "/solutions/image2.png",
    title: "AI Solutions",
    description:
      "Leverage artificial intelligence to automate business processes, enhancing efficiency and accuracy while reducing costs. These solutions can range from automating repetitive tasks to optimizing operations and improving decision-making through data-driven insights.",
  },
  {
    image: "/solutions/image3.png",
    title: "Data Analytics",
    description: "Transforms raw data into actionable insights by identifying patterns, trends, and anomalies that can inform decision-making and drive business improvements. This process involves collecting, cleaning, analyzing, visualizing, and interpreting data to uncover valuable information",
  },
  {
    image: "/solutions/image4.png",
    title: "Travel Technology",
    description: "Smart booking engines, reservation systems, and travel APIs that enable online travel agencies (OTAs) and travel agencies to manage and book travel services like flights, hotels, and car rentals",
  },
  {
    image: "/solutions/image5.png",
    title: "Technology consultation",
    description:
      "Provides expert guidance and support to organizations on how to best leverage technology to achieve their business goals",
  },
];

const Solutions = () => {
  return (
    <div className=" bg-gray-50 py-20 md:py-8" id="solution">
        <h1 className=" text-[#213448] font-bold text-3xl text-center md:text-5xl md:w-[85vw] md:pl-20 md:py-10 pb-4 ">Delivering transformative solutions and services powered by <span className="text-blue-600 ">cutting-edge  technologies.</span></h1>
      <Carousel className="" plugins={[
        Autoplay({
          delay: 5000,
        }) as any,
      ]}>
        <CarouselContent className="">
          {solutions.map((item, index) => (
            <CarouselItem key={index} className="md:grid md:grid-cols-2 flex flex-col items-start">
              <div className="col-span-1 flex  md:pl-20 md:pb-20 px-8">
                <img
                  src={item.image}
                  alt=""
                  className="md:w-[50vw] md:h-full h-[30vh] flex "
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className=" flex flex-col justify-center col-span-1 md:pr-28 px-8 md:pl-8 gap-2 md:gap-8">
                <h1 className="text-2xl md:text-5xl font-semibold opacity-80 pt-2 md:pt-8">{item.title}</h1>
                <p className="text-lg md:text-lg/8 font-light text-gray-600">
                  {item.description}
                </p>
                <Button className="w-40 bg-blue-600 text-white text-lg font-normal rounded-xl h-12 hover:bg-blue-800" onClick={()=>toast.success("Contact Us for more information")}>
                  Explore More <ArrowRight />
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
    </div>
  );
};

export default Solutions;

{
  /* <Carousel className=" ">
  <h1 className="text-4xl font-semibold flex justify-center pt-16">
    Our Solutions
  </h1>
  <CarouselContent className="">
    {images.map((item, index) => (
      <CarouselItem key={index} className=" px-64 py-28 pt-4">
        <div
          className=" bg-cover bg-center w-full flex justify-end items-center flex-col h-[80vh] p-8"
          style={{ backgroundImage: `url(${item})`, borderRadius: "8px" }}
        >
          <h1 className="text-white text-center font-medium text-4xl">
            Lorem ipsum dolor
          </h1>
          <p className="text-white text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            deserunt, aut in corrupti officiis recusandae aspernatur nisi.
            Repudiandae, inventore. Recusandae rem inventore molestiae? Minus
            quibusdam accusantium praesentium, assumenda rerum accusamus.
          </p>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>; */
}
