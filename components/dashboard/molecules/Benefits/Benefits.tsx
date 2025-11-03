import React from 'react'

import BenefitsLeftSide from './BenefitsLeftSide'
import { BenefitsRightSide } from './BenefitsRightSide/BenefitsRightSide'

export const Benefits = () => {
     return (
          <section
               data-dark="true"
               className="relative flex flex-col items-center justify-center rounded-b-[3.125rem] bg-black lg:gap-12 lg:pb-24"
          >
               <div
                    className="absolute -top-40 z-30 h-72 w-full"
                    style={{
                         background: 'linear-gradient(180deg, rgba(0, 8, 9, 0) 0%, #000809 60%)',
                    }}
               />
               <div className="flex flex-col gap-12 lg:gap-24">
                    <h1 className="z-50 text-center text-4xl font-bold -tracking-[0.1rem] text-white lg:text-7xl lg:-tracking-[0.2rem]">
                         Масштабируем бизнес <br /> через IT
                    </h1>
                    <div className="w-full p-4">
                         <div className="grid grid-cols-1 gap-14 lg:flex lg:items-center lg:justify-evenly">
                              <BenefitsLeftSide />
                              <BenefitsRightSide />
                         </div>
                    </div>
               </div>
          </section>
     )
}
