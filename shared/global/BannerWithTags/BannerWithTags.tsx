import Banner from '@/components/journal/molecules/Banner'
import Tags from '@/components/journal/molecules/Tags'
import React, { FC } from 'react'

import { BannerWithTagsProps } from './BannerWithTags.types'

export const BannerWithTags: FC<BannerWithTagsProps> = (props) => {
     const { bannerTitle = 'Журнал' } = props
     return (
          <div className="flex flex-col gap-8 lg:gap-24 lg:px-7">
               <Banner title={bannerTitle} />
               <Tags />
          </div>
     )
}
