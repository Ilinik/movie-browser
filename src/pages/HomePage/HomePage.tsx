import { Navigation } from 'swiper/modules';
import { MovieSlider } from '../../components/ui/MovieSlider/MovieSlider';
import { usePopularMovies } from '../../hooks/usePopularMovies';
import { SwiperSlide } from 'swiper/react';
import { MovieCard } from '../../components/ui/MovieCard/MovieCard';

export const HomePage = () => {
  const { data, isLoading, isError } = usePopularMovies();
  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mt-6">
        Search, Explore, and Dive Into the Best of Cinema
      </h1>
      <section className="section flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-xl">Movies - Popular</h3>
          <MovieSlider
            slidesPerView={7}
            spaceBetween={20}
            allowTouchMove={false}
            navigation={{
              prevEl: '.prev',
              nextEl: '.next',
            }}
            modules={[Navigation]}
          >
            {data.results.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard movie={movie} />
              </SwiperSlide>
            ))}
          </MovieSlider>
        </div>
      </section>
    </div>
  );
};
