import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { REVIEWS, SALON_INFO } from '../data/salonData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="avis" className="py-10 sm:py-14 md:py-20 bg-white border-t border-stone-200/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Header */}
        <div className="max-w-xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-stone-700 text-xs mb-2">
            <div className="flex items-center gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-stone-900">{SALON_INFO.rating} / 5</span>
            <span className="text-stone-300">·</span>
            <span className="text-stone-500 font-light">{SALON_INFO.reviewCount} avis vérifiés Google</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-normal text-stone-900">
            Ce que disent nos clientes
          </h2>
        </div>

        {/* Refined Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5 mb-7 sm:mb-9">
          {REVIEWS.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#FAF7F2] border border-stone-200/70 flex flex-col justify-between shadow-2xs"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400 font-light">{review.date}</span>
                </div>

                <p className="text-xs text-stone-700 font-light leading-relaxed italic">
                  « {review.comment} »
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-stone-200/60 text-xs">
                <span className="font-medium text-stone-900 text-xs sm:text-sm block">{review.author}</span>
                <span className="text-[11px] text-stone-500 font-light mt-0.5 block">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Link to all reviews */}
        <div className="text-center">
          <a
            href={SALON_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-stone-950 underline underline-offset-4 transition-colors font-medium"
          >
            <span>Consulter les 200+ avis sur notre fiche Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
};
export default ReviewsSection;
