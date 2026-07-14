"use client";

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GoogleReviewCard, { GoogleReview } from './GoogleReviewCard';

interface Props {
  reviews: GoogleReview[];
}

export default function ReviewCarousel({ reviews }: Props) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [reviews]);

  const scrollByAmount = (amount: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  // If there's only one review, we can just center it without arrows, but carousel still works.
  const isSingle = reviews.length === 1;

  return (
    <div className="relative w-full max-w-7xl mx-auto px-5 md:px-6">
      
      {/* Carousel Container */}
      <div 
        ref={carouselRef}
        onScroll={checkScroll}
        className={`flex overflow-x-auto gap-6 pb-8 pt-4 custom-scrollbar snap-x snap-mandatory ${isSingle ? 'justify-center' : ''}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reviews.map((review) => (
          <GoogleReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* Left Fade Overlay */}
      <div className={`absolute left-5 md:left-6 top-0 bottom-8 w-16 md:w-32 bg-linear-to-r from-[#02050D] to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollLeft && !isSingle ? 'opacity-100' : 'opacity-0'}`}></div>
      
      {/* Right Fade Overlay */}
      <div className={`absolute right-5 md:right-6 top-0 bottom-8 w-16 md:w-32 bg-linear-to-l from-[#02050D] to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollRight && !isSingle ? 'opacity-100' : 'opacity-0'}`}></div>

      {/* Navigation Arrows (Only show if multiple reviews) */}
      {!isSingle && (
        <>
          <button 
            onClick={() => scrollByAmount(-350)}
            disabled={!canScrollLeft}
            aria-label="Previous review"
            className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-[#0A1326] border border-cyan-500/50 flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-all duration-300 ${!canScrollLeft ? 'opacity-0 pointer-events-none scale-90' : 'opacity-100 hover:scale-110 hover:bg-cyan-900/50 hover:border-cyan-400'}`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scrollByAmount(350)}
            disabled={!canScrollRight}
            aria-label="Next review"
            className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-[#0A1326] border border-cyan-500/50 flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-all duration-300 ${!canScrollRight ? 'opacity-0 pointer-events-none scale-90' : 'opacity-100 hover:scale-110 hover:bg-cyan-900/50 hover:border-cyan-400'}`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Hide default scrollbar in webkit */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
