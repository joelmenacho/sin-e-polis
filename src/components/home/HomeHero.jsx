import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';

const HomeHero = ({ movies }) => {
  return (
    <Swiper
      tag="section"
      modules={[A11y, Autoplay, Navigation, Pagination]}
      autoplay={{ delay: 5000 }}
      loop
      navigation
      pagination={{ clickable: true }}
    >
      {[...movies].splice(0, 6).map((element) => {
        const { backdrop_path, id, overview, poster_path, title } = element;
        return (
          <SwiperSlide
            key={id}
            tag="section"
            className="section section--hero var"
            style={{
              ['--desktop-image']: `url(${process.env.REACT_APP_TMDB_IMAGE_BASE}/w1280${backdrop_path})`,
              ['--mobile-image']: `url(${process.env.REACT_APP_TMDB_IMAGE_BASE}/w500${poster_path})`
            }}
          >
            <div style={{ zIndex: 10, padding: '2.5rem' }}>
              <h2>{title}</h2>
              <h4>{overview}</h4>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};


export default HomeHero;
