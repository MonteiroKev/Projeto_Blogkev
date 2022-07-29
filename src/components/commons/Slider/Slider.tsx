import { ReactNode } from "react";
import { A11y, Navigation, Pagination } from "swiper";
import { Swiper, SwiperProps } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperContainer } from "./styles";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

export default function Slider({ children, settings }: SliderProps) {
  return (
    <SwiperContainer>
      <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
        {children}
      </Swiper>
    </SwiperContainer>
  );
}
