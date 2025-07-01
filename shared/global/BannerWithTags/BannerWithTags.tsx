import Banner from '@/components/journal/molecules/Banner'
import Tags from '@/components/journal/molecules/Tags'
import React, { FC } from 'react'

import { BannerWithTagsProps } from './BannerWithTags.types'

export const BannerWithTags: FC<BannerWithTagsProps> = (props) => {
    const { bannerTitle = 'Журнал' } = props
    return (
        <>
            <Banner title={bannerTitle} />
            <Tags />
        </>
    )
}
