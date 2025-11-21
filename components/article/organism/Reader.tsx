import { FC } from 'react'

import ReaderHeading from '../molecules/ReaderHeading'
import { ReaderProps } from './Reader.types'
import ReaderGrid from './ReaderGrid'

export const Reader: FC<ReaderProps> = (props) => {
     const { blog } = props

     const {
          title,
          blocks,
          created_at,
          id,
          slug,
          status,
          taxonomies,
          type_id,
          updated_at,
          view_count,
          author_id,
          cover,
          custom_fields,
          excerpt,
          published_at,
          reading_time_min,
     } = blog

     return (
          <div className="flex flex-col items-center justify-center gap-8 px-4">
               <ReaderHeading
                    title={title}
                    views={view_count}
                    description={excerpt}
                    updatedAt={updated_at}
                    category={'тестовая категория'}
               />
               <ReaderGrid
                    caseItems={[]}
                    content={''}
                    ratingsCount={4 - 1}
                    image={''}
                    relatedBlogs={[]}
                    id={id || ''}
               />
          </div>
     )
}
