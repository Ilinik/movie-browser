import { Navigation } from 'swiper/modules';
import { MovieSlider } from '../../components/ui/MovieSlider/MovieSlider';
import { usePopularMovies } from '../../hooks/usePopularMovies';
import { SwiperSlide } from 'swiper/react';

export const HomePage = () => {
  const { data, isLoading, isError } = usePopularMovies();
  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className="flex flex-col gap-12">
      <div>
        <MovieSlider
          slidesPerView={6}
          spaceBetween={20}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
          modules={[Navigation]}
        >
          {data.results.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div>
                <div>{movie.title}</div>
                <img
                  src={`${import.meta.env.VITE_API_IMAGE}/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
            </SwiperSlide>
          ))}
        </MovieSlider>
      </div>
    </div>
  );
};
