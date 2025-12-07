import { useRef } from 'react';
import type { ReactNode } from 'react';
import { Swiper } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import type { TSwiper } from '../../../types/entities/TSwiper';

import 'swiper/css';
import 'swiper/css/navigation';

interface IMovieSliderProps extends TSwiper {
  children?: ReactNode;
  className?: string;
}

export const MovieSlider = ({
  children,
  className,
  ...swiperProps
}: IMovieSliderProps) => {
  const sliderRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    sliderRef.current?.slidePrev();
  };

  const handleNext = () => {
    sliderRef.current?.slideNext();
  };
  return (
    <div className={className}>
      <Swiper
        {...swiperProps}
        onSwiper={(swiper) => {
          sliderRef.current = swiper;
          swiperProps.onSwiper?.(swiper);
        }}
        className="mySwiper"
      >
        {children}
      </Swiper>

      <div>
        <button
          onClick={handlePrev}
          className="prev absolute left-0 top-1/2 z-10 bg-black/50 text-white px-3 py-1"
        >
          Prev
        </button>

        <button
          onClick={handleNext}
          className="next absolute right-0 top-1/2 z-10 bg-black/50 text-white px-3 py-1"
        >
          Next
        </button>
      </div>
    </div>
  );
};
