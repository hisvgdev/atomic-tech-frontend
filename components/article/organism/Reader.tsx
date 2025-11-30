import { FC } from 'react'

import ReaderHeading from '../molecules/ReaderHeading'
import { ReaderProps } from './Reader.types'
import ReaderGrid from './ReaderGrid'

export const Reader: FC<ReaderProps> = (props) => {
     const { findedArticle } = props

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
          covers,
          custom_fields,
          excerpt,
          published_at,
          reading_time_min,
     } = findedArticle

     const content = blocks?.map((b) => b.content?.html ?? '') ?? []
     console.log(findedArticle)
     return (
          <div className="flex flex-col items-center justify-center gap-8 px-4">
               <ReaderHeading
                    title={title}
                    views={view_count}
                    description={excerpt}
                    updatedAt={updated_at}
                    category={'тестовая категория'}
               />
               {content && (
                    <ReaderGrid
                         caseItems={[]}
                         content={content[0]}
                         ratingsCount={4 - 1}
                         covers={covers}
                         relatedBlogs={[]}
                         id={id || ''}
                    />
               )}
          </div>
     )
}
