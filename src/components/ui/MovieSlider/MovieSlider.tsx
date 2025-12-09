import { useEffect, useRef } from 'react';
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

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const swiper = sliderRef.current;
    const navigation = swiper?.params.navigation;

    if (
      swiper &&
      prevRef.current &&
      nextRef.current &&
      navigation &&
      typeof navigation === 'object'
    ) {
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div className={`relative`}>
      <Swiper
        {...swiperProps}
        onSwiper={(swiper) => {
          sliderRef.current = swiper;
          swiperProps.onSwiper?.(swiper);
        }}
        className={className}
      >
        {children}
      </Swiper>

      <button
        ref={prevRef}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
      >
        <ChevronLeft
          size={70}
          className="stroke-gray-300 hover:stroke-white hover:scale-115 active:scale-130 duration-300 transition"
        />
      </button>

      <button
        ref={nextRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
      >
        <ChevronRight
          size={70}
          className="stroke-gray-300 hover:stroke-white hover:scale-115 active:scale-130 duration-300 transition"
        />
      </button>
    </div>
  );
};
