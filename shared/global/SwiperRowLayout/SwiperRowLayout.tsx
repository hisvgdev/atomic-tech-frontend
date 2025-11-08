'use client'

import React, { FC, forwardRef, useImperativeHandle, useRef } from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/react'

import type { Swiper as SwiperType } from 'swiper'

import { SwiperRowLayoutProps } from './SwiperRowLayout.types'

import 'swiper/css'

import { cn } from '@/lib/utils'

export type SwiperRowLayoutRef = {
     slideNext: () => void
     slidePrev: () => void
}

export const SwiperRowLayout = forwardRef<SwiperRowLayoutRef, SwiperRowLayoutProps>(
     ({ children, slidesPerViews = 1.5, className, hiddenPagination = false }, ref) => {
          const swiperRef = useRef<SwiperType | null>(null)

          useImperativeHandle(ref, () => ({
               slideNext: () => swiperRef.current?.slideNext(),
               slidePrev: () => swiperRef.current?.slidePrev(),
          }))

          return (
               <div className={cn('flex flex-col gap-8 lg:hidden', className)}>
                    <Swiper
                         onSwiper={(swiper) => (swiperRef.current = swiper)}
                         spaceBetween={16}
                         slidesPerView={slidesPerViews}
                         pagination={
                              hiddenPagination
                                   ? false
                                   : {
                                          el: '.custom-pagination',
                                          clickable: true,
                                     }
                         }
                         modules={[Pagination]}
                         className="h-full w-full"
                    >
                         {children}
                    </Swiper>
                    {!hiddenPagination && <div className="custom-pagination mt-2 flex justify-center gap-x-2" />}
               </div>
          )
     },
)

SwiperRowLayout.displayName = 'SwiperRowLayout'
