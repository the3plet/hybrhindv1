import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import data from "../../data.json";

const Services = () => {
  return (
    <div>
      <h1 className="flex justify-start m-4 mb-0 font-light text-2xl">Our Expertise</h1>
      {/* <Separator className="bg-gray-500  mx-4" /> */}
      <div className="flex gap-4 flex-col md:flex-row px-4 pt-4">
        {data.services.map((service, index) => (
          <Card key={index} className="p-6 py-8 space-y-4 hover:border-gray-500">
            <CardTitle className="flex justify-center text-4xl md:text-2xl font-light">{service.title}</CardTitle>
            <CardContent>
              <CardDescription className="flex justify-center text-center text-2xl md:text-xl font-extralight">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
