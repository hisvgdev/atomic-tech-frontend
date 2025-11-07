'use client'

import React from 'react'

export const Hero = () => {
     return (
          <section className="flex w-full items-center justify-center">
               <video
                    src="/video/mockupBanner.MP4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-[470px] w-full object-cover lg:h-fit"
               />
          </section>
     )
}
