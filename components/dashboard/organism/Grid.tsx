import React from 'react'

import LeaveRequest from '../../../shared/global/LeaveRequest'
import AllProjectsButton from '../molecules/AllProjectsButton'
import Amenities from '../molecules/Amenities'
import Benefits from '../molecules/Benefits'
import Blog from '../molecules/Blog'
import CustomSolutions from '../molecules/CustomSolutions'
import Hero from '../molecules/Hero'
import LastProjects from '../molecules/LastProjects'
import Showreel from '../molecules/Showreel'

export const Grid = () => {
     return (
          <div className="h-full w-full overflow-y-auto">
               <div className="flex flex-col gap-4 lg:gap-16">
                    <Hero />
                    <Benefits />
                    <LastProjects />
                    <AllProjectsButton link="/cases" />
                    <Showreel />
                    <CustomSolutions />
                    <Amenities />
                    <Blog />
                    <div className="px-1.5 lg:px-7">
                         <LeaveRequest />
                    </div>
               </div>
          </div>
     )
}
