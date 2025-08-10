import React, { FC } from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/react'

import { SwiperRowLayoutProps } from './SwiperRowLayout.types'

import 'swiper/css'

export const SwiperRowLayout: FC<SwiperRowLayoutProps> = (props) => {
     const { children, slidesPerViews = 1.5 } = props
     return (
          <div className="flex flex-col gap-8 lg:hidden">
               <Swiper
                    spaceBetween={16}
                    slidesPerView={slidesPerViews}
                    grid={{
                         fill: 'row',
                         rows: 1,
                    }}
                    pagination={{
                         el: '.custom-pagination',
                         clickable: true,
                    }}
                    modules={[Pagination]}
                    className="h-full w-full"
               >
                    {children}
                    <div className="custom-pagination mt-2 flex justify-center gap-x-2" />
               </Swiper>
          </div>
     )
}
