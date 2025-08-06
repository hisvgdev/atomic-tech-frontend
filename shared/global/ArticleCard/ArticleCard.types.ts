import { StaticImageData } from 'next/image'

export type RatingPosition = 'top' | 'bottom'

export interface ArticleCardProps {
  title: string
  views?: number;
  // Optional media & meta
  date?: string
  imgCover?: StaticImageData | string;

  // Appearance
  classNames?: string

  // Behavior & features
  tag?: string
  withTag?: boolean;
  hasRating?: boolean
  rating?: number
  ratingPosition?: RatingPosition

  // link
  href?: string;
}
