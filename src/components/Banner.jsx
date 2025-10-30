import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const Banner = ({ images }) => {
  return (
    <div>
      <Carousel className="w-full h-[450px] md:h-80 overflow-hidden">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <img
                src={image}
                alt="Banner Image"
                className="w-full h-[450px] object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-6 text-gray-700"/>
        <CarouselNext className="right-6 text-gray-700"/>
      </Carousel>
      
    </div>
  );
};

export default Banner;
