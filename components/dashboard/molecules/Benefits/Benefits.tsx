import React from 'react'

import BenefitsLeftSide from './BenefitsLeftSide'
import { BenefitsRightSide } from './BenefitsRightSide/BenefitsRightSide'

export const Benefits = () => {
    return (
        <section data-dark="true" className="flex justify-center items-center flex-col gap-12">
            <h1 className="font-bold text-4xl text-center lg:text-7xl">
                Масштабируем бизнес через IT
            </h1>
            <div className="w-full bg-black p-4 rounded-[3.125rem] lg:py-[7.75rem] lg:px-[5.18rem]">
                <div className="grid grid-cols-1 gap-14 lg:flex lg:justify-between lg:items-center">
                    <BenefitsLeftSide />
                    <BenefitsRightSide />
                </div>
            </div>
        </section>
    )
}
