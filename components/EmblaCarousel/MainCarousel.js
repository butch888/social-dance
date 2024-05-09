'use client';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import classes from './Embla.module.css';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';


export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function Card({ image }) {
  return (
    <div className="w-full min-w-0 shrink-0 ">
      <img
        src={image}
        className="w-full lg:rounded-2xl lg:object-cover"
      />
    </div>
  );
}

export function MainCarousel(props) {
  const { slides, height } = props;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);

  const scrollPrev = useCallback(() => {
    autoplay.current.reset();
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    autoplay.current.reset();
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onInit = useCallback((emblaApi) => {
    emblaApi && setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    emblaApi && setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  const slidesMapped = slides?.map((item) => (
    <Card key={item.title} {...item} />
  ));

  return (
    <div className={classes.container}>
      <div className="min-w-[calc(320px_-_2rem)] max-w-[calc(100vw_-_2rem)] max-w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slidesMapped}
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className={cn(classes.dotsContainer)}>
          <div className={classes.dots}>
            {scrollSnaps.map((_, n) => {
              if (n === selectedIndex) {
                return <div key={n} className={classes.dotActive} />;
              }
              return (
                <div
                  key={n}
                  className={classes.dot}
                  onClick={() => scrollTo(n)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}