import { useRef } from 'react';
import type { ReactNode } from 'react';
import { Swiper } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import type { TSwiper } from '../../../types/entities/TSwiper';

import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    <div className={`relative ${className}`}>
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

      <button
        onClick={handlePrev}
        className="prev absolute left-0 top-1/2 -translate-y-1/2 z-10"
      >
        <ChevronLeft
          size={70}
          className="stroke-gray-300 hover:stroke-white hover:scale-115 active:scale-130 duration-300 transition"
        />
      </button>

      <button
        onClick={handleNext}
        className="next absolute right-0 top-1/2 -translate-y-1/2 z-10"
      >
        <ChevronRight
          size={70}
          className="stroke-gray-300 hover:stroke-white hover:scale-115 active:scale-130 duration-300 transition"
        />
      </button>
    </div>
  );
};
