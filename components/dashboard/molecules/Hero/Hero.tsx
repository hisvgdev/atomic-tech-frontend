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
                    className="h-[30rem] w-full object-cover lg:h-[48rem]"
               />
          </section>
     )
}
