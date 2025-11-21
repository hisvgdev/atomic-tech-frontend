'use client'

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { Skeleton } from '@/components/ui/skeleton'
import { useReviewsQuery } from '@/hooks/query/useReviewsQuery'

import FeedbackCard from './FeedbackCard'

export const CustomSolutionsFeedback = () => {
     const { data: reviewsData, isLoading: isReviewsDataLoading, isError: isReviewsDataError } = useReviewsQuery()

     if (isReviewsDataLoading || isReviewsDataError) {
          return (
               <div className="flex h-full w-full flex-col gap-8">
                    <div>
                         <Swiper
                              slidesPerView="auto"
                              spaceBetween={12}
                              loop={true}
                              speed={3000}
                              autoplay={{
                                   delay: 0,
                                   disableOnInteraction: false,
                              }}
                              modules={[Autoplay]}
                              className="h-full w-full"
                         >
                              {Array.from({ length: 12 }).map((_, index) => (
                                   <SwiperSlide key={`slide-${index}`} style={{ width: 'auto' }}>
                                        <Skeleton className="h-48 w-64 rounded-xl bg-gray-200" />
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                    </div>
                    <Swiper
                         slidesPerView="auto"
                         spaceBetween={12}
                         loop={true}
                         speed={3000}
                         autoplay={{
                              delay: 1,
                              disableOnInteraction: false,
                              reverseDirection: true,
                         }}
                         direction="horizontal"
                         modules={[Autoplay]}
                         className="w-full"
                    >
                         {Array.from({ length: 12 }).map((_, index) => (
                              <SwiperSlide key={`slide-${index}`} style={{ width: 'auto' }}>
                                   <Skeleton className="h-48 w-64 rounded-xl bg-gray-200" />
                              </SwiperSlide>
                         ))}
                    </Swiper>
               </div>
          )
     }

     const uniqueReviews = Array.isArray(reviewsData)
          ? (reviewsData.filter((item, index, self) => index === self.findIndex((other) => other.id === item.id)) ?? [])
          : []

     const mid = Math.ceil(uniqueReviews.length / 2)
     const firstColumn = uniqueReviews.slice(0, mid)
     const secondColumn = uniqueReviews.slice(mid)

     return (
          <div className="w-full py-12">
               <div className="flex flex-col gap-4">
                    <div>
                         <Swiper
                              slidesPerView="auto"
                              spaceBetween={12}
                              loop={true}
                              speed={3000}
                              autoplay={{
                                   delay: 0,
                                   disableOnInteraction: false,
                              }}
                              modules={[Autoplay]}
                              className="w-full"
                         >
                              {firstColumn.map((review, index) => (
                                   <SwiperSlide key={`${review.id}-${index}`} style={{ width: 'auto' }}>
                                        <FeedbackCard review={review} />
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                    </div>

                    <div className="rtl">
                         <Swiper
                              slidesPerView="auto"
                              spaceBetween={12}
                              loop={true}
                              speed={3000}
                              autoplay={{
                                   delay: 1,
                                   disableOnInteraction: false,
                                   reverseDirection: true,
                              }}
                              direction="horizontal"
                              modules={[Autoplay]}
                              className="w-full"
                         >
                              {secondColumn.map((review, index) => (
                                   <SwiperSlide key={`${review.id}-${index}`} style={{ width: 'auto' }}>
                                        <div className="ltr">
                                             <FeedbackCard review={review} />
                                        </div>
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                    </div>
               </div>
          </div>
     )
}
