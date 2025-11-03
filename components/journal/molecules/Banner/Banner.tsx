import React, { FC } from 'react'

import { BannerProps } from './Banner.types'

export const Banner: FC<BannerProps> = (props) => {
     const { title = 'Журнал' } = props
     return (
          <>
               <section data-dark="true" className="absolute top-0 left-0 block w-full">
                    <div className="bg-gradient-main py w-full rounded-br-3xl rounded-bl-3xl pt-28 pb-8">
                         <div className="flex items-center justify-center">
                              <div className="flex items-center gap-4">
                                   <h1 className="text-5xl font-bold -tracking-[0.23rem]">
                                        <span className="text-white/80">PRO</span>
                                        <span className="text-white">GER</span>
                                   </h1>
                                   <p className="text-sm font-semibold text-white lg:text-base">
                                        IT {title} <br /> от Atomic Tech
                                   </p>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}
