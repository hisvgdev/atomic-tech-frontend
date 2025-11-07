import React from 'react'

import BenefitsLeftSide from './BenefitsLeftSide'
import { BenefitsRightSide } from './BenefitsRightSide/BenefitsRightSide'

export const Benefits = () => {
     return (
          <section
               data-dark="true"
               className="relative flex flex-col items-center justify-center rounded-b-3xl bg-black lg:gap-12 lg:pb-24"
          >
               <div
                    className="absolute -top-32 z-30 h-52 w-full md:-top-40 md:h-72"
                    style={{
                         background: 'linear-gradient(180deg, rgba(0, 8, 9, 0) 0%, #000809 60%)',
                    }}
               />
               <div className="flex flex-col gap-12 lg:gap-24">
                    <div className="flex flex-col gap-4">
                         <h1 className="z-30 hidden text-center text-7xl font-bold -tracking-[0.2rem] text-white md:block">
                              Дизайн и разработка <br /> цифровых продуктов под ключ
                         </h1>
                         <h1 className="z-30 block text-center text-4xl font-bold -tracking-[0.1rem] text-white md:hidden">
                              Дизайн и разработка <br /> цифровых продуктов под ключ
                         </h1>
                         <p className="font-manrope text-center text-base font-normal text-gray-300 md:text-3xl">
                              От сайтов, интернет-магазинов и приложений до блокчейн-решений и нейросетей
                         </p>
                    </div>

                    <div className="w-full px-4 lg:p-4">
                         <div className="grid grid-cols-1 gap-14 lg:flex lg:items-center lg:justify-evenly">
                              <BenefitsLeftSide />
                              <BenefitsRightSide />
                         </div>
                    </div>
               </div>
          </section>
     )
}
