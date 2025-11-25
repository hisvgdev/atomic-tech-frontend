import React from 'react'

import { RoutesEnum } from '@/types/Routes.types'

import LeaveRequest from '../../../shared/global/LeaveRequest'
import AboutUs from '../molecules/AboutUs'
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
                    <div>
                         <Hero />
                         <Benefits />
                    </div>
                    <LastProjects />
                    <div className="px-4 lg:px-7">
                         <AllProjectsButton link={RoutesEnum.cases} />
                    </div>
                    <Amenities />
                    <AboutUs />
                    <Showreel />
                    <CustomSolutions />
                    <Blog />
                    <div className="px-1 lg:px-7">
                         <LeaveRequest />
                    </div>
               </div>
          </div>
     )
}
