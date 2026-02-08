import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
    images: string[];
    alt: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, alt }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying, images.length]);

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

    if (images.length === 0) return null;

    return (
        <div
            className="relative w-full h-full group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Main Image */}
            <div className="relative w-full h-full overflow-hidden">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${alt} - ${index + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        loading="lazy"
                    />
                ))}
            </div>

            {/* Navigation Arrows - Only show if more than 1 image */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={goToPrevious}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                        aria-label="Next image"
                    >
                        <ChevronRight size={20} />
                    </button>
                </>
            )}

            {/* Dot Indicators - Only show if more than 1 image */}
            {images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-white w-6'
                                    : 'bg-white/50 hover:bg-white/75'
                                }`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Image Counter */}
            {images.length > 1 && (
                <div className="absolute top-3 right-3 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    {currentIndex + 1} / {images.length}
                </div>
            )}
        </div>
    );
};

export default ImageCarousel;
