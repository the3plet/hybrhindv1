import { Card, CardContent, CardFooter } from "./ui/card";
import { Separator } from "./ui/separator";
import datas from "../../data.json";

const Products = () => {
  return (
    <div>
      <h3>Products</h3>
      <Separator />
      {datas.products.map((data, index) => (
        <Card key={index}>
          <CardContent>
            <img src={data.image} alt="img" key={index} className="w-16 h-28" />
          </CardContent>
          <CardFooter>
            <h2>{data.name}</h2>
            <p className="border rounded-xl px-2 align-middle ">Checkout</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Products;
