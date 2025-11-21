import { StarIcon } from '@phosphor-icons/react'
import React, { FC } from 'react'

import { FeedbackCardProps } from './FeedbackCard.types'

export const FeedbackCard: FC<FeedbackCardProps> = (props) => {
     const { review } = props
     const { rating, title, content } = review
     return (
          <div className="flex h-48 max-w-md flex-col justify-between rounded-xl bg-[#F6F7FB] p-6">
               <div>
                    <div className="mb-1 flex items-center justify-between">
                         <h4 className="text-lg font-bold text-[#51535B]">{title}</h4>
                         <div className="flex items-center gap-2">
                              {Array.from({ length: 5 }).map((_, indx) => (
                                   <StarIcon
                                        key={indx}
                                        size={24}
                                        fill={indx < rating ? '#51535B' : '#D6D6D6'}
                                        weight="fill"
                                   />
                              ))}
                         </div>
                    </div>
                    <p className="text-sm text-gray-400">{'company'}</p>
               </div>
               <p className="line-clamp-4 text-sm text-gray-700">{content}</p>
          </div>
     )
}
