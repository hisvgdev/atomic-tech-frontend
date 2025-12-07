'use client'

import React, { FC } from 'react'
import { Grid, Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/grid'

import { SwiperGridLayoutProps } from './SwiperGridLayout.types'

export const SwiperGridLayout: FC<SwiperGridLayoutProps> = (props) => {
     const { children } = props
     return (
          <div className="flex flex-col gap-8 lg:hidden">
               <Swiper
                    spaceBetween={14}
                    slidesPerView={1.4}
                    grid={{ rows: 2, fill: 'row' }}
                    autoHeight={false}
                    pagination={{
                         el: '.custom-pagination-amenties',
                         clickable: true,
                    }}
                    modules={[Pagination, Grid]}
                    className="min-h-0 w-full"
               >
                    {children}
                    <div className="custom-pagination mt-2 flex justify-center gap-x-2" />
               </Swiper>
          </div>
     )
}
