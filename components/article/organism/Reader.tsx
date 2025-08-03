import { FC } from 'react'

import ReaderHeading from '../molecules/ReaderHeading'
import { ReaderProps } from './Reader.types'
import ReaderGrid from './ReaderGrid'

export const Reader: FC<ReaderProps> = (props) => {
    const { blog } = props

    const {
        title,
        case_items,
        content,
        description,
        image,
        updated_at,
        created_at,
        id,
        views,
        average_rating,
        ratings_count,
        related_blogs,
    } = blog.data

    return (
        <div className="flex flex-col gap-y-8 overflow-y-auto">
            <ReaderHeading
                title={title}
                views={views}
                description={description}
                updatedAt={updated_at}
            />
            <hr />
            <ReaderGrid
                caseItems={case_items}
                content={content}
                ratingsCount={average_rating - 1}
                image={image}
                relatedBlogs={related_blogs}
                id={id}
            />
        </div>
    )
}
