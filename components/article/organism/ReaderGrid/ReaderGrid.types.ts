import { CoverImage } from '@/utils/shared/atomic-client/types'

export interface ReaderGridProps {
     caseItems?: any[]
     content?: string
     covers: CoverImage[]
     id: string
     ratingsCount?: number
     relatedBlogs: {
          id: number
          title: string
     }[]
}
