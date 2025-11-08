'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import SwiperRowLayout from '@/shared/global/SwiperRowLayout'
import { SwiperRowLayoutRef } from '@/shared/global/SwiperRowLayout/SwiperRowLayout'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import React, { FC, useRef } from 'react'
import { SwiperSlide } from 'swiper/react'

import { AboutUsContentTeamMembersProps } from './AboutUsContentTeamMembers.types'

export const AboutUsContentTeamMembers: FC<AboutUsContentTeamMembersProps> = () => {
     const swiperRef = useRef<SwiperRowLayoutRef>(null)
     return (
          <div className="flex w-full max-w-xl flex-col gap-5">
               <div className="flex w-full items-center justify-between">
                    <span className="text-2xl font-bold text-black">
                         Команда:<sup className="text-lg font-bold text-[#B3B3B3]">+17</sup>
                    </span>

                    <div className="flex items-center gap-2">
                         <button
                              type="button"
                              className="w-36 cursor-pointer rounded-full bg-black px-5 py-4 hover:bg-black/70"
                              onClick={() => swiperRef.current?.slidePrev()}
                         >
                              <ArrowLeftIcon className="text-white" />
                         </button>
                         <button
                              type="button"
                              className="flex w-36 cursor-pointer items-end justify-end rounded-full bg-black px-5 py-4 hover:bg-black/70"
                              onClick={() => swiperRef.current?.slideNext()}
                         >
                              <ArrowRightIcon className="text-white" />
                         </button>
                    </div>
               </div>
               <SwiperRowLayout slidesPerViews={1.63} ref={swiperRef} className="lg:block" hiddenPagination>
                    {Array.from({ length: 4 }).map((_, indx) => (
                         <SwiperSlide key={indx} className="shrink-0 basis-[60%]">
                              <Card className="mx-1 my-4 flex h-96 flex-col justify-between p-6 ring ring-[#20202033]">
                                   <div className="flex flex-col gap-4">
                                        <CardHeader>
                                             <div className="h-24 w-24 rounded-full bg-gray-400" />
                                        </CardHeader>

                                        <CardContent className="px-0">
                                             <div className="flex flex-col gap-1">
                                                  <h4 className="text-2xl font-semibold text-black/80">
                                                       Умный человек в очках
                                                  </h4>
                                                  <p className="text-lg font-medium text-black/80">СЕО Atomic Studio</p>
                                             </div>
                                        </CardContent>
                                   </div>

                                   <CardFooter className="px-0">
                                        <span className="text-lg font-normal text-black/80">
                                             Быстро зарекомендовал себя как талантливый бездельник и стратег
                                        </span>
                                   </CardFooter>
                              </Card>
                         </SwiperSlide>
                    ))}
               </SwiperRowLayout>
          </div>
     )
}
