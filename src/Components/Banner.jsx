import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/parallax";
import "swiper/css/autoplay";

import slider1 from "../assets/images/banner01.jpg";
import slider2 from "../assets/images/banner02.jpg";
import slider3 from "../assets/images/banner03.jpg";

const Banner = () => {
  return (
    <div className="min-h-[400px]">
      <Swiper
        className="mySwiper "
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        autoplay
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        
      >
        <SwiperSlide>
          <img src={slider1} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} className="w-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
