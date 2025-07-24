import BannerWithTags from '@/shared/global/BannerWithTags'
import { FC } from 'react'

import ReaderHeading from '../molecules/ReaderHeading'
import { ReaderProps } from './Reader.types'
import ReaderGrid from './ReaderGrid'

export const Reader: FC<ReaderProps> = (props) => {
    const { blog } = props
    const { title, case_items, content, description, image, updated_at, created_at, id } = blog.data
    return (
        <div className="flex flex-col gap-y-8 overflow-y-auto">
            <ReaderHeading title={title} description={description} updatedAt={updated_at} />
            <hr />
            <ReaderGrid caseItems={case_items} content={content} image={image} id={id} />
        </div>
    )
}
