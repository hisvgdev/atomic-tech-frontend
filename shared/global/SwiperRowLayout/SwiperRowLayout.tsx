import React, { FC } from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/react'

import { SwiperRowLayoutProps } from './SwiperRowLayout.types'

import 'swiper/css'

export const SwiperRowLayout: FC<SwiperRowLayoutProps> = (props) => {
    const { children } = props
    return (
        <div className="flex flex-col gap-8 lg:hidden">
            <Swiper
                spaceBetween={16}
                slidesPerView={1.5}
                grid={{
                    fill: 'row',
                    rows: 1,
                }}
                pagination={{
                    el: '.custom-pagination',
                    clickable: true,
                }}
                modules={[Pagination]}
                className="w-full h-full"
            >
                {children}
                <div className="custom-pagination flex justify-center gap-x-2 mt-2" />
            </Swiper>
        </div>
    )
}
