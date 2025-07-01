import BannerWithTags from '@/shared/global/BannerWithTags'
import { FC } from 'react'

import ReaderHeading from '../molecules/ReaderHeading'
import { ReaderProps } from './Reader.types'
import ReaderGrid from './ReaderGrid'

export const Reader: FC<ReaderProps> = () => {
    return (
        <div className="flex flex-col gap-y-8">
            <BannerWithTags bannerTitle="Статьи" />
            <hr />
            <ReaderHeading />
            <hr />
            <ReaderGrid />
        </div>
    )
}
