import { Suspense } from 'react'

import ArticlesCards from '../molecules/ArticlesCards'

export const Grid = () => {
     return (
          <div className="px-3 lg:px-7">
               <Suspense>
                    <ArticlesCards />
               </Suspense>
          </div>
     )
}
