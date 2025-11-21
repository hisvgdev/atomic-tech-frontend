import React, { FC } from 'react'

import { AboutUsContentProps } from './AboutUsContent.types'
import AboutUsContentTeamLeader from './AboutUsContentTeamLeader'
import AboutUsContentTeamMembers from './AboutUsContentTeamMembers'

export const AboutUsContent: FC<AboutUsContentProps> = (props) => {
     const {} = props
     return (
          <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
               <AboutUsContentTeamLeader />
               <AboutUsContentTeamMembers />
          </div>
     )
}
