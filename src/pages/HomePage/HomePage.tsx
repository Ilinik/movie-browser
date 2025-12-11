import { Navigation } from 'swiper/modules';
import { MovieSlider } from '../../components/ui/MovieSlider/MovieSlider';
import { usePopularMovies } from '../../hooks/movies/usePopularMovies';
import { SwiperSlide } from 'swiper/react';
import { ItemCard } from '../../components/ui/ItemCard/ItemCard';
import { usePopularSeries } from '../../hooks/series/usePopularSeries';

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
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl ">
          Welcome.
        </h1>
        <h2 className="font-bold text-xl lg:text-2xl">
          Explore. Search. Enjoy. Everything you love in one place.
        </h2>
      </div>
      <section className="section flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h3 className="font-bold md:text-xl text-md">Movies - Popular</h3>
          <MovieSlider
            allowTouchMove={false}
            modules={[Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 6,
              },
              1280: {
                slidesPerView: 7,
                spaceBetween: 20,
              },
            }}
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
          <h3 className="font-bold md:text-xl text-md">Series - Popular</h3>
          <MovieSlider
            allowTouchMove={false}
            modules={[Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 6,
              },
              1280: {
                slidesPerView: 7,
                spaceBetween: 20,
              },
            }}
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
