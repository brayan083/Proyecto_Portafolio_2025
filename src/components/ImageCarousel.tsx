import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { createPortal } from 'react-dom';

interface ImageCarouselProps {
    images: string[];
    alt: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, alt }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);

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

    // Lock body scroll when fullscreen
    useEffect(() => {
        if (isFullscreen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isFullscreen]);

    // Keyboard navigation for fullscreen
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!isFullscreen) return;
        if (e.key === 'Escape') setIsFullscreen(false);
        if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [isFullscreen, images.length]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    const goToPrevious = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        setIsAutoPlaying(false);
    };

    const goToNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index: number, e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const openFullscreen = () => {
        setIsAutoPlaying(false);
        setIsFullscreen(true);
    };

    if (images.length === 0) return null;

    const navArrows = (fullscreen = false) => {
        const size = fullscreen ? 28 : 20;
        const btnClass = fullscreen
            ? 'bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300'
            : 'bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10';

        return (
            <>
                <button
                    onClick={(e) => goToPrevious(e)}
                    className={`absolute left-3 top-1/2 -translate-y-1/2 ${btnClass}`}
                    aria-label={`Previous image (currently ${currentIndex + 1} of ${images.length})`}
                >
                    <ChevronLeft size={size} />
                </button>
                <button
                    onClick={(e) => goToNext(e)}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 ${btnClass}`}
                    aria-label={`Next image (currently ${currentIndex + 1} of ${images.length})`}
                >
                    <ChevronRight size={size} />
                </button>
            </>
        );
    };

    const dotIndicators = (fullscreen = false) => (
        <div
            className={`absolute left-1/2 -translate-x-1/2 flex gap-2 z-10 ${fullscreen ? 'bottom-6' : 'bottom-3'}`}
            role="tablist"
            aria-label="Slide indicators"
        >
            {images.map((_, index) => (
                <button
                    key={index}
                    onClick={(e) => goToSlide(index, e)}
                    role="tab"
                    aria-selected={index === currentIndex}
                    className={`rounded-full transition-all duration-300 ${fullscreen ? 'w-3 h-3' : 'w-2 h-2'} ${index === currentIndex
                        ? `bg-white ${fullscreen ? 'w-8' : 'w-6'}`
                        : 'bg-white/50 hover:bg-white/75'
                        }`}
                    aria-label={`Go to image ${index + 1} of ${images.length}`}
                />
            ))}
        </div>
    );

    const fullscreenModal = isFullscreen && createPortal(
        <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setIsFullscreen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${alt} fullscreen gallery`}
        >
            {/* Close button */}
            <button
                onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors duration-300 z-20"
                aria-label="Close fullscreen"
            >
                <X size={24} />
            </button>

            {/* Counter */}
            {images.length > 1 && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium z-20">
                    {currentIndex + 1} / {images.length}
                </div>
            )}

            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center p-12" onClick={(e) => e.stopPropagation()}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${alt} - image ${index + 1} of ${images.length}`}
                        className={`absolute max-w-[90vw] max-h-[85vh] object-contain transition-opacity duration-300 rounded-lg ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                            }`}
                        aria-hidden={index !== currentIndex}
                    />
                ))}
            </div>

            {/* Navigation */}
            {images.length > 1 && (
                <>
                    {navArrows(true)}
                    {dotIndicators(true)}
                </>
            )}
        </div>,
        document.body
    );

    return (
        <>
            <div
                className="relative w-full h-full group cursor-pointer"
                role="region"
                aria-label={`${alt} image carousel`}
                aria-roledescription="carousel"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                onClick={openFullscreen}
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

                {/* Fullscreen hint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 text-white p-2 rounded-full">
                        <Maximize2 size={20} />
                    </div>
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        {navArrows()}

                        </>
                )}

                {/* Dot Indicators */}
                {images.length > 1 && dotIndicators()}

                {/* Image Counter */}
                {images.length > 1 && (
                    <div className="absolute top-3 right-3 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium z-10" aria-hidden="true">
                        {currentIndex + 1} / {images.length}
                    </div>
                )}
            </div>

            {fullscreenModal}
        </>
    );
};

export default ImageCarousel;
