import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import datas from "../../data.json";

const TextScroll = () => {
  return (
    <Carousel>
      <CarouselContent>
        {datas.scrollText.map((data, index) => (
          <CarouselItem key={index}>{data}</CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TextScroll;
