import signatureIcon from '@/public/assets/icons/about-us/signatureIcon.svg'
import Image from 'next/image'
import React, { FC } from 'react'

import { AboutUsContentProps } from './AboutUsContent.types'
import AboutUsContentTeamLeader from './AboutUsContentTeamLeader'
import AboutUsContentTeamMembers from './AboutUsContentTeamMembers'

export const AboutUsContent: FC<AboutUsContentProps> = (props) => {
     const {} = props
     return (
          <div className="relative z-10 flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
               <AboutUsContentTeamLeader />
               <div className="flex items-center justify-center">
                    <div className="mx-auto flex flex-col gap-5 lg:gap-12">
                         <div className="flex flex-col gap-2 lg:gap-5">
                              <blockquote className="text-xl font-medium text-black/80 lg:text-2xl lg:leading-9 lg:font-semibold">
                                   «Нужно любить то, что делаешь, и тогда труд — даже самый грубый — возвышается до
                                   творчества»
                              </blockquote>
                              <div className="flex justify-end">
                                   <span className="text-sm font-medium text-black/60 lg:text-2xl lg:font-semibold">
                                        — М. Горький
                                   </span>
                              </div>
                         </div>
                         <span className="text-xl text-black/80 lg:text-2xl lg:font-normal">
                              Именно по этому в нашей команде опытные специалисты которые любят и преданы своему делу! 
                         </span>
                    </div>
               </div>
               <div className="absolute right-0 -bottom-8 z-0 hidden -translate-x-[280%] xl:flex">
                    <Image src={signatureIcon} alt="signatureIcon" />
               </div>

               <AboutUsContentTeamMembers />
          </div>
     )
}
