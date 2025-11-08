import React, { FC, Suspense } from 'react'

import { CustomSolutionsProps } from './CustomSolutions.types'
import { CustomSolutionsFeedback } from './CustomSolutionsFeedback/CustomSolutionsFeedback'
import CustomSolutionsHeader from './CustomSolutionsHeader'

export const CustomSolutions: FC<CustomSolutionsProps> = (props) => {
     const {} = props

     return (
          <section data-dark="false" className="flex flex-col gap-8 px-4 lg:px-0">
               <Suspense>
                    <CustomSolutionsHeader />
               </Suspense>
               <CustomSolutionsFeedback />
          </section>
     )
}
