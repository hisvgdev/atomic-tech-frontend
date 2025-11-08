import React, { FC } from 'react'

import { AboutUsContentProps } from './AboutUsContent.types'
import AboutUsContentTeamLeader from './AboutUsContentTeamLeader'
import AboutUsContentTeamMembers from './AboutUsContentTeamMembers'

export const AboutUsContent: FC<AboutUsContentProps> = (props) => {
     const {} = props
     return (
          <div className="flex w-full items-center justify-between">
               <AboutUsContentTeamLeader />
               <AboutUsContentTeamMembers />
          </div>
     )
}
