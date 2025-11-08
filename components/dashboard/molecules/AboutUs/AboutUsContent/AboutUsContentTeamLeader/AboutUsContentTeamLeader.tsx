import seoCompanyIcon from '@/public/assets/icons/about-us/teamLeader.svg'
import Image from 'next/image'
import React, { FC } from 'react'

import { AboutUsContentTeamLeaderProps } from './AboutUsContentTeamLeader.types'

export const AboutUsContentTeamLeader: FC<AboutUsContentTeamLeaderProps> = () => {
     return (
          <div className="flex items-center gap-12">
               <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                         <h4 className="text-3xl font-bold tracking-tighter text-black">Альберт Каренович</h4>
                         <p className="text-2xl font-medium text-black/70">СЕО Atomic Studio</p>
                    </div>
                    <Image
                         src={seoCompanyIcon}
                         alt="seo-of-company"
                         className="h-96 w-96 rounded-full object-contain"
                    />
               </div>
               <div className="mx-auto flex max-w-96 flex-col gap-8">
                    <div className="flex flex-col gap-5">
                         <blockquote className="text-3xl leading-11 font-semibold text-black/80">
                              «Нужно любить то, что делаешь, и тогда труд — даже самый грубый — возвышается до
                              творчества»
                         </blockquote>
                         <span className="text-2xl font-semibold text-black/60">— М. Горький</span>
                    </div>
                    <span className="text-2xl font-normal text-black/80">
                         Именно по этому в нашей команде опытные специалисты которые любят и преданы своему делу! 
                    </span>
               </div>
          </div>
     )
}
