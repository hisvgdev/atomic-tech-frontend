import { Post } from '@/utils/shared/atomic-client/types'
import { StaticImageData } from 'next/image'

export type RatingPosition = 'top' | 'bottom'

export interface ArticleCardProps {
     article: Post
     classNames?: string
     withTag?: boolean
     hasRating?: boolean
     ratingPosition?: RatingPosition
}
