'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { usePostsQuery } from '@/hooks/query/usePostsQuery'
import { useIsMobile } from '@/hooks/useMediaQuery'
import SwiperRowLayout from '@/shared/global/SwiperRowLayout'
import { SwiperRowLayoutRef } from '@/shared/global/SwiperRowLayout/SwiperRowLayout'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import React, { FC, useRef } from 'react'
import { SwiperSlide } from 'swiper/react'

import { AboutUsContentTeamMembersProps } from './AboutUsContentTeamMembers.types'

export const AboutUsContentTeamMembers: FC<AboutUsContentTeamMembersProps> = () => {
     const swiperRef = useRef<SwiperRowLayoutRef>(null)
     const isMobile = useIsMobile()

     const {
          data: employeeData,
          isLoading: isEmployeeData,
          isError: isEmployeeError,
     } = usePostsQuery('employee', 'employee')

     const publishedEmployee = employeeData?.filter((t) => t.status === 'published')

     if ((publishedEmployee && publishedEmployee?.length < 1) || isEmployeeError) return null

     return (
          <div className="flex w-full flex-col gap-5 lg:max-w-2xl">
               <div className="flex w-full items-center justify-between">
                    <span className="text-xl font-bold text-black lg:text-2xl">
                         Команда:<sup className="text-md font-bold text-[#B3B3B3] lg:text-lg">+17</sup>
                    </span>

                    <div className="flex items-center gap-2">
                         <button
                              type="button"
                              className="w-24 cursor-pointer rounded-full bg-black px-5 py-4 hover:bg-black/70 lg:w-36"
                              onClick={() => swiperRef.current?.slidePrev()}
                         >
                              <ArrowLeftIcon className="text-white" />
                         </button>
                         <button
                              type="button"
                              className="flex w-24 cursor-pointer items-end justify-end rounded-full bg-black px-5 py-4 hover:bg-black/70 lg:w-36"
                              onClick={() => swiperRef.current?.slideNext()}
                         >
                              <ArrowRightIcon className="text-white" />
                         </button>
                    </div>
               </div>
               <SwiperRowLayout
                    slidesPerViews={isMobile ? 1.2 : 1.65}
                    ref={swiperRef}
                    className="lg:block"
                    hiddenPagination
               >
                    {publishedEmployee
                         ? publishedEmployee.map((e, indx) => (
                                <SwiperSlide key={indx} className="shrink-0 lg:basis-[60%]">
                                     <Card className="mx-1 my-4 flex h-96 flex-col justify-between p-6 ring ring-[#20202033]">
                                          <div className="flex flex-col gap-4">
                                               <CardHeader>
                                                    {e.covers.length > 0 ? (
                                                         <Image
                                                              src={e.covers[0].url}
                                                              alt={e.covers[0].filename || 'cover-member'}
                                                         />
                                                    ) : (
                                                         <div className="h-24 w-24 rounded-full bg-gray-400" />
                                                    )}
                                               </CardHeader>

                                               <CardContent className="px-0">
                                                    <div className="flex flex-col gap-1">
                                                         <h4 className="text-lg font-semibold text-black/80 lg:text-2xl">
                                                              {e.title}
                                                         </h4>
                                                         <p className="text-base font-medium text-black/80 lg:text-lg">
                                                              {/* {e.} */}
                                                         </p>
                                                    </div>
                                               </CardContent>
                                          </div>

                                          <CardFooter className="px-0">
                                               <span className="text-base font-normal text-black/80 lg:text-lg">
                                                    {e.excerpt}
                                               </span>
                                          </CardFooter>
                                     </Card>
                                </SwiperSlide>
                           ))
                         : null}
               </SwiperRowLayout>
          </div>
     )
}
