import React from 'react'

import BenefitsLeftSide from './BenefitsLeftSide'
import { BenefitsRightSide } from './BenefitsRightSide/BenefitsRightSide'

export const Benefits = () => {
     return (
          <section data-dark="true" className="flex flex-col items-center justify-center gap-12">
               <h1 className="max-w-80 text-center text-4xl font-bold -tracking-[0.1rem] lg:max-w-full lg:text-7xl lg:-tracking-[0.2rem]">
                    Масштабируем бизнес через IT
               </h1>
               <div className="w-full rounded-[3.125rem] bg-black p-4 lg:px-[5.18rem] lg:py-[7.75rem]">
                    <div className="grid grid-cols-1 gap-14 lg:flex lg:items-center lg:justify-evenly">
                         <BenefitsLeftSide />
                         <BenefitsRightSide />
                    </div>
               </div>
          </section>
     )
}
