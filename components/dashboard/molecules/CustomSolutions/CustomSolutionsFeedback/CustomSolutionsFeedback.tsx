'use client'

import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { Skeleton } from '@/components/ui/skeleton'
import { getReviews } from '@/utils/api/reviews/reviews.api'
import { StarIcon } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'

const FeedbackCard = ({
     name,
     company,
     review_text,
     rating,
     created_at,
     updated_at,
}: {
     name: string
     company: string
     review_text: string
     rating: number
     created_at: string
     updated_at: string
}) => (
     <div className="flex h-48 max-w-md flex-col justify-between rounded-xl bg-[#F6F7FB] p-6">
          <div>
               <div className="mb-1 flex items-center justify-between">
                    <h4 className="text-lg font-bold text-[#51535B]">{name}</h4>
                    <div className="flex items-center gap-2">
                         {Array.from({ length: 5 }).map((_, indx) => (
                              <StarIcon
                                   key={indx}
                                   size={24}
                                   fill={indx < rating ? '#51535B' : '#D6D6D6'}
                                   weight="fill"
                              />
                         ))}
                    </div>
               </div>
               <p className="text-sm text-gray-400">{company}</p>
          </div>
          <p className="line-clamp-4 text-sm text-gray-700">{review_text}</p>
     </div>
)

export const CustomSolutionsFeedback = () => {
     const {
          data: reviewsData,
          isLoading: isReviewsLoading,
          isError: isReviewsError,
     } = useQuery({
          queryKey: ['reviews'],
          queryFn: () => getReviews(),
          staleTime: 4000,
     })

     if (isReviewsLoading || !reviewsData?.data) {
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

     const uniqueReviews =
          reviewsData?.data.filter((item, index, self) => index === self.findIndex((other) => other.id === item.id)) ??
          []

     const mid = Math.ceil(uniqueReviews.length / 2)
     const firstColumn = uniqueReviews.slice(0, mid)
     const secondColumn = uniqueReviews.slice(mid)

     return (
          <div className="w-full py-12">
               <div className="flex flex-col gap-4">
                    {/* First column — вправо */}
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
                              {firstColumn.map((item, index) => (
                                   <SwiperSlide key={`${item.id}-${index}`} style={{ width: 'auto' }}>
                                        <FeedbackCard {...item} />
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                    </div>

                    {/* Second column — влево */}
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
                              {secondColumn.map((item, index) => (
                                   <SwiperSlide key={`${item.id}-${index}`} style={{ width: 'auto' }}>
                                        <div className="ltr">
                                             <FeedbackCard {...item} />
                                        </div>
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                    </div>
               </div>
          </div>
     )
}
