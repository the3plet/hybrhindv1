import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import data from "../../data.json";

const Services = () => {
  return (
    <div>
      <h1>Our Expertise</h1>
      <div className="flex">

      {data.services.map((service, index) => (
          <Card key={index} className="p-8">
          <CardTitle>{service.title}</CardTitle>
          <CardContent>
            <CardDescription>{service.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
      </div>
    </div>
  );
};

export default Services;
