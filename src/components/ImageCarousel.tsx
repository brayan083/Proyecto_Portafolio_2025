import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface ImageCarouselProps {
    images: string[];
    alt: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, alt }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying, images.length]);

    // Respect prefers-reduced-motion
    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mq.matches) setIsAutoPlaying(false);

        const handler = (e: MediaQueryListEvent) => setIsAutoPlaying(!e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        setIsAutoPlaying(false);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const toggleAutoPlay = () => {
        setIsAutoPlaying((prev) => !prev);
    };

    if (images.length === 0) return null;

    return (
        <div
            className="relative w-full h-full group"
            role="region"
            aria-label={`${alt} image carousel`}
            aria-roledescription="carousel"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Main Image */}
            <div className="relative w-full h-full overflow-hidden" aria-live={isAutoPlaying ? 'off' : 'polite'}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${alt} - image ${index + 1} of ${images.length}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        loading="lazy"
                        aria-hidden={index !== currentIndex}
                    />
                ))}
            </div>

            {/* Navigation Arrows + Pause/Play - Only show if more than 1 image */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={goToPrevious}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                        aria-label={`Previous image (currently ${currentIndex + 1} of ${images.length})`}
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                        aria-label={`Next image (currently ${currentIndex + 1} of ${images.length})`}
                    >
                        <ChevronRight size={20} />
                    </button>

                    {/* Pause/Play button */}
                    <button
                        onClick={toggleAutoPlay}
                        className="absolute top-3 left-3 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                        aria-label={isAutoPlaying ? 'Pause automatic slideshow' : 'Play automatic slideshow'}
                    >
                        {isAutoPlaying ? <Pause size={14} /> : <Play size={14} />}
                    </button>
                </>
            )}

            {/* Dot Indicators */}
            {images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10" role="tablist" aria-label="Slide indicators">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            role="tab"
                            aria-selected={index === currentIndex}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-white w-6'
                                    : 'bg-white/50 hover:bg-white/75'
                                }`}
                            aria-label={`Go to image ${index + 1} of ${images.length}`}
                        />
                    ))}
                </div>
            )}

            {/* Image Counter */}
            {images.length > 1 && (
                <div className="absolute top-3 right-3 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium z-10" aria-hidden="true">
                    {currentIndex + 1} / {images.length}
                </div>
            )}
        </div>
    );
};

export default ImageCarousel;
