"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper core styles
import "swiper/css";
import "swiper/css/effect-fade";

import "@/app/globals.css";

// Modules
import { EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";

const Slideshow = () => {
  return (
    <section className="h-[65vh]">
      <Swiper
        spaceBetween={10}
        effect="fade"
        autoplay={{
          delay: 600, // 1 minute
          disableOnInteraction: true,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="slide-1"
            width={1000}
            height={700}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt="slide-2"
            width={1000}
            height={700}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt="slide-3"
            width={1000}
            height={700}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt="slide-4"
            width={1000}
            height={700}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slideshow;
