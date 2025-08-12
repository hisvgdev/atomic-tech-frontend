import coverImage from '@/public/assets/images/projects/secondProject.png'
import ArticleCard from '@/shared/global/ArticleCard'
import SwiperRowLayout from '@/shared/global/SwiperRowLayout'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { SwiperSlide } from 'swiper/react'

import ReaderRating from '../ReaderRating'
import { ReaderContentProps } from './ReaderContent.types'
import ReaderContentLeft from './ReaderContentLeft'

export const ReaderContent: FC<ReaderContentProps> = (props) => {
     const { content, image, id, ratingsCount, relatedBlogs, caseItems } = props
     console.log(relatedBlogs)
     return (
          <div className="flex w-full justify-center">
               <div
                    className={`flex w-full flex-col gap-6 lg:flex-row lg:${relatedBlogs.length > 0 ? 'justify-between' : 'w-full lg:gap-44'} lg:px-4`}
               >
                    <ReaderContentLeft content={content as string} />
                    <div className="flex w-full flex-col items-center gap-y-4 lg:w-full">
                         <Image
                              src={image || coverImage}
                              alt="cover-image"
                              width={480}
                              height={480}
                              className="w-full rounded-[1.875rem] object-cover"
                         />
                         <span
                              className="max-w-xl text-start text-base font-medium lg:max-w-full"
                              dangerouslySetInnerHTML={{ __html: content as string }}
                         />
                         {Array.isArray(caseItems) && caseItems.length > 0 ? (
                              <div className="flex w-full flex-col gap-4 lg:gap-8">
                                   <h2 className="text-xl font-bold lg:text-3xl">Пример нашей реализации:</h2>
                                   <div className="hidden w-full items-center gap-x-3 lg:flex lg:flex-col lg:gap-6">
                                        {caseItems.map((c, i) => (
                                             <ArticleCard
                                                  key={i}
                                                  imgCover={c.photos[0]}
                                                  title={c.title}
                                                  href={`/cases/${c.id}`}
                                                  withTag
                                                  tag={c.categories[0]}
                                                  views={c.views || 0}
                                                  date={c.created_at}
                                                  classNames="w-full"
                                             />
                                        ))}
                                   </div>
                                   <div className="flex flex-col gap-8 lg:hidden">
                                        <SwiperRowLayout slidesPerViews={caseItems.length > 1 ? 1.5 : 1}>
                                             {caseItems.map((c, i) => (
                                                  <SwiperSlide key={`${c.id}-${i}`}>
                                                       <ArticleCard
                                                            key={i}
                                                            imgCover={c.photos[0]}
                                                            title={c.title}
                                                            href={`/cases/${c.id}`}
                                                            withTag
                                                            tag={c.categories[0]}
                                                            views={c.views || 0}
                                                            date={c.created_at}
                                                            classNames="w-full"
                                                       />
                                                  </SwiperSlide>
                                             ))}
                                        </SwiperRowLayout>
                                   </div>
                              </div>
                         ) : null}

                         <ReaderRating id={id} ratingsCount={ratingsCount || 0} />
                    </div>
                    {relatedBlogs.length > 0 ? (
                         <div className="hidden max-w-1/6 flex-col gap-y-2 lg:flex">
                              <h4 className="text-base font-semibold">Также по теме:</h4>
                              <ul className="flex list-none flex-col gap-y-4 pl-0.5 text-base text-[#737373]">
                                   {relatedBlogs.map((itemBlogs, idx) => {
                                        return (
                                             <Link
                                                  key={`${idx}-${itemBlogs}`}
                                                  className="text-[#737373] transition-all hover:underline"
                                                  href={`/articles/${itemBlogs.id}`}
                                             >
                                                  {itemBlogs.title}
                                             </Link>
                                        )
                                   })}
                              </ul>
                         </div>
                    ) : null}
               </div>
          </div>
     )
}
