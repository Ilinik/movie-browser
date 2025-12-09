import { Navigation } from 'swiper/modules';
import { MovieSlider } from '../../components/ui/MovieSlider/MovieSlider';
import { usePopularMovies } from '../../hooks/usePopularMovies';
import { SwiperSlide } from 'swiper/react';
import { ItemCard } from '../../components/ui/ItemCard/ItemCard';
import { usePopularSeries } from '../../hooks/usePopularSeries';

export const HomePage = () => {
  const {
    data: popularMovies,
    isLoading: moviesLoading,
    isError: moviesError,
  } = usePopularMovies();

  const {
    data: popularSeries,
    isLoading: seriesLoading,
    isError: seriesError,
  } = usePopularSeries();

  if (moviesLoading || seriesLoading) return <div>Loading</div>;
  if (moviesError || seriesError) return <div>Error</div>;

  return (
    <div>
      <div className="mt-6 flex flex-col">
        <h1 className="text-4xl font-bold">Welcome.</h1>
        <h2 className="text-2xl font-bold">
          Explore. Search. Enjoy. Everything you love in one place.
        </h2>
      </div>
      <section className="section flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-xl">Movies - Popular</h3>
          <MovieSlider
            slidesPerView={7}
            spaceBetween={20}
            allowTouchMove={false}
            modules={[Navigation]}
            className="popularMovies"
          >
            {popularMovies.results.map((movie) => (
              <SwiperSlide key={movie.id}>
                <ItemCard movie={movie} />
              </SwiperSlide>
            ))}
          </MovieSlider>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-xl">Series - Popular</h3>
          <MovieSlider
            slidesPerView={7}
            spaceBetween={20}
            allowTouchMove={false}
            modules={[Navigation]}
            className="popularSeries"
          >
            {popularSeries.results.map((series) => (
              <SwiperSlide key={series.id}>
                <ItemCard movie={series} />
              </SwiperSlide>
            ))}
          </MovieSlider>
        </div>
      </section>
    </div>
  );
};
