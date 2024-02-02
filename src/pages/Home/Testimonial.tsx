import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import { carouselData } from "@/constants/links";

export function TestimonyCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative w-full max-w-[28rem] lg:max-w-3xl mx-auto border border-green-600 rounded-lg shadow-2xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {carouselData.map((data) => (
          <CarouselItem key={data.name} className="px-5 relative pb-20 pt-15">
            <div role="group " className="pl-4 text-left">
              <div className="my-4">
                <Quote
                  strokeWidth={1}
                  className="ml-auto h-10 w-10 text-green"
                />
              </div>
              <div>
                <p className=" text-lg">{data.quote}</p>
              </div>
              <div className="">
                <h3 className="text-green">{data.name}</h3>
                <p>{data.position}</p>
              </div>
              <div className="absolute right-3 bottom-2 sm:bottom-10 p-2 rounded-full border-yellow-500 border">
                <img
                  src={data.imageSrc}
                  alt=""
                  className="rounded-full w-16 h-16 object-cover sm:w-20 sm:h-20"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute left-1/2 -bottom-12 top-auto">
        <CarouselPrevious
          variant="outline"
          className="border border-green-600 "
        />
        <CarouselNext variant="outline" className="border border-green-600 " />
      </div>
    </Carousel>
  );
}
