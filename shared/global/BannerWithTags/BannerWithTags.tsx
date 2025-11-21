import Banner from '@/components/journal/molecules/Banner'
import Tags from '@/components/journal/molecules/Tags'
import React, { FC, Suspense } from 'react'

import { BannerWithTagsProps } from './BannerWithTags.types'

export const BannerWithTags: FC<BannerWithTagsProps> = (props) => {
     const { bannerTitle = 'Журнал' } = props
     return (
          <div className="flex flex-col gap-8">
               <Banner title={bannerTitle} />
               <Suspense>
                    <Tags />
               </Suspense>
          </div>
     )
}
