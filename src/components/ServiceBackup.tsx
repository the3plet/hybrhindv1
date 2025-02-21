import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import data from "../../data.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  BrainCircuit,
  ChartNoAxesCombined,
  Headset,
  PlaneTakeoff,
  TrendingUpDown,
} from "lucide-react";
import { Button } from "./ui/button";

const Expertise = () => {
  const serviceIcons = {
    "AI Solutions": <BrainCircuit/>,
    "Forex ERP Solutions": <ChartNoAxesCombined />,
    "Data Analytics": <TrendingUpDown />,
    "Travel Technology": <PlaneTakeoff />,
  };
  return (
    <div className="bg-[#EFF3EA] rounded-3xl p-4">
      <span className="flex flex-col items-center text-center md:items-start md:text-start">
        <h1 className="flex justify-start m-4 mb-0 font-bold text-3xl text-[#4C585B]">
          Our Services
        </h1>
        <p className="flex md:justify-start justify-center m-4 font-light text-sm md:text-sm text-[#4C585B] w-[80%] uppercase tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odio
          enim aliquid, voluptatibus soluta nihil.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odio
          enim aliquid, voluptatibus soluta nihil.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odio
          enim aliquid, voluptatibus soluta nihil.
        </p>
      </span>

      <Tabs className="hidden md:flex md:flex-col p-8 space-y-0 ">
        <>
          <TabsList className="flex rounded-t-xl py-8 rounded-xl">
            {data.services.map((service, index) => (
              <TabsTrigger value={service.title} key={index} className="w-full py-4 rounded-t-xl  text-[#7E99A3] data-[state=active]:bg-[#e3e3f9] data-[state=active]:text-[#7E99A3] hover:bg-[#e3e3f9] hover:text-[#637077]">
                <span>
                  {serviceIcons[service.title as keyof typeof serviceIcons]}
                </span>
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {data.services.map((service, index) => (
            <TabsContent value={service.title} className="text-[#686D76] bg-[#F5F7F8] p-8 rounded-b-xl" key={index}>
              <div className="flex gap-10 justify-between px-16">
                <div className="flex flex-col justify-center gap-6">
                  <h1 className=" text-4xl font-bold">  
                    <span className="text-[#7E99A3] ">

                     {serviceIcons [service.title as keyof typeof serviceIcons]}
                    </span>
                    
                    {service.title}</h1>
                  <p className="w-72">{service.description}</p>
                 <Button variant={"default"} className="bg-[#a0b9c2] w-36 rounded-2xl">
                  Contact Us <Headset/>
                 </Button>
                </div>
                <div className="flex justify-center items-center">

                <img width={180}  className="p-2 rounded-xl mr-28" src="https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img"/>
                </div>
              </div>
            </TabsContent>
          ))}
        </>
      </Tabs>

      {data.services.map((service, index) => (
        <Card
          key={index}
          className="p-6 py-8 space-y-4 hover:border-gray-500 md:hidden mx-8 my-4"
        >
          <CardTitle className="flex justify-center text-xl  font-light">
            {service.title}
          </CardTitle>
          <CardContent>
            <CardDescription className="flex justify-center text-center text-base  font-extralight">
              {service.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Expertise;
