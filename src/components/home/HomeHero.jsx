import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay,Navigation, Pagination } from 'swiper';

const HomeHero = () => {
  return (
    <Swiper
      modules={[A11y, Autoplay, Navigation, Pagination]}
   autoplay={{delay: 5000}}
      lopp
          navigation
      pagination={{ clickable: true }}

    >
      <SwiperSlide tag="section" className="section section--hero">Slide 1</SwiperSlide>
      <SwiperSlide tag="section" className="section section--hero">Slide 2</SwiperSlide>
      <SwiperSlide tag="section" className="section section--hero">Slide 3</SwiperSlide>
      <SwiperSlide tag="section" className="section section--hero">Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default HomeHero;