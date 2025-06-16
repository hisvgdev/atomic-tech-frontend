import Banner from '@/components/journal/molecules/Banner'
import { Tags } from '@/components/journal/molecules/Tags/Tags'
import { FC } from 'react'

import ReaderHeading from '../molecules/ReaderHeading'
import { ReaderProps } from './Reader.types'
import ReaderGrid from './ReaderGrid'

export const Reader: FC<ReaderProps> = () => {
    return (
        <div className="flex flex-col gap-y-8">
            <Banner />
            <Tags />
            <hr />
            <ReaderHeading />
            <hr />
            <ReaderGrid />
        </div>
    )
}
