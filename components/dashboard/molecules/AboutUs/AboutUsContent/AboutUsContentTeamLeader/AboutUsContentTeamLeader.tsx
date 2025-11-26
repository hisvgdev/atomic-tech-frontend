import teamLeader from '@/public/assets/icons/about-us/teamLeader.svg'
import Image from 'next/image'
import React, { FC } from 'react'

import { AboutUsContentTeamLeaderProps } from './AboutUsContentTeamLeader.types'

export const AboutUsContentTeamLeader: FC<AboutUsContentTeamLeaderProps> = () => {
     return (
          <div className="flex flex-col gap-6 lg:min-w-sm lg:flex-row lg:items-center">
               <div className="hidden flex-col gap-4 lg:flex">
                    <Image src={teamLeader} alt="seo-of-company" className="h-96 w-96 rounded-xl object-contain" />
                    <div className="flex flex-col gap-1">
                         <h4 className="text-3xl font-bold tracking-tighter text-black">Альберт Каренович</h4>
                         <p className="text-2xl font-medium text-black/70">СЕО Atomic Studio</p>
                    </div>
               </div>
               <div className="flex gap-4 lg:hidden">
                    <Image src={teamLeader} alt="seo-of-company" className="h-36 w-36 object-contain lg:h-96 lg:w-96" />
                    <div className="flex flex-col py-2">
                         <h4 className="text-2xl font-bold tracking-tight text-black">Альберт Каренович</h4>
                         <div className="mt-auto">
                              <p className="text-md font-medium text-black/70">СЕО Atomic Studio</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}
