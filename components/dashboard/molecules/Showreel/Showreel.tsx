import videoInDevelopmentIcon from '@/public/assets/icons/videoInDevelopment.svg'
import Image from 'next/image'
import React from 'react'

export const Showreel = () => {
     return (
          <section data-dark="true">
               <div className="px-6">
                    <div className="flex h-full w-full items-center justify-center rounded-3xl bg-black py-12">
                         <Image src={videoInDevelopmentIcon} alt="video-in-dev" />
                    </div>
               </div>
          </section>
     )
}
