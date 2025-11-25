'use client'

import CaseHistory from '@/components/cases/molecules/CaseHistory'
import AllProjectsButton from '@/components/dashboard/molecules/AllProjectsButton'
import { Button } from '@/components/ui/button'
import CaseCard from '@/shared/global/CaseCard'
import LeaveRequest from '@/shared/global/LeaveRequest'
import { StarIcon } from '@phosphor-icons/react/dist/ssr'
import { ArrowRight, Calendar, Globe } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import CaseCategorySection from '../molecules/CaseCategorySection'
import CaseServiceSection from '../molecules/CaseServiceSection'
import CaseTechnologySection from '../molecules/CaseTechnologySection'
import { CaseGridProps } from './CaseGrid.types'

import 'swiper/css'

import blogImage from '@/public/assets/images/blog/firstBlog.png'
import SwiperRowLayout from '@/shared/global/SwiperRowLayout'
import { EnvelopeIcon } from '@/shared/icons/EnvelopeIcon/EnvelopeIcon'
import { CaretLeftIcon, CaretRightIcon, EnvelopeSimpleIcon } from '@phosphor-icons/react'
import { A11y, Navigation, Pagination } from 'swiper/modules'

import { cn } from '@/lib/utils'

import { RoutesEnum } from '@/types/Routes.types'

export const CaseGrid: FC<CaseGridProps> = (props) => {
     const { findedCase, relatedCase } = props
     const {
          blocks,
          created_at,
          id,
          slug,
          status,
          taxonomies,
          title,
          type_id,
          updated_at,
          view_count,
          author_id,
          cover,
          custom_fields,
          excerpt,
          published_at,
          reading_time_min,
     } = findedCase

     console.log(taxonomies)

     // const formatedWebsiteLink = website_link ? website_link.split('/')[2] : ''
     const getYear = new Date(updated_at || '').getFullYear()

     return (
          <main className="h-full w-full overflow-y-auto px-3.5 lg:px-6 lg:pt-12">
               <article className="flex flex-col gap-y-16">
                    <header className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
                         <div className="flex flex-col items-start gap-3 lg:max-w-full">
                              <h1 className="text-4xl font-bold -tracking-[0.1rem] lg:text-6xl lg:tracking-tight">
                                   {title}
                              </h1>
                              <p className="text-primary-300 text-base lg:text-xl">{excerpt}</p>
                         </div>
                         <div className="flex items-center gap-x-2">
                              <Button className="cursor-pointer rounded-full border border-black bg-transparent py-6 text-black hover:bg-transparent lg:py-4">
                                   <Globe size={22} />
                                   <Link href={'/'} target="_blank" className="text-base font-medium">
                                        {'/'}
                                   </Link>
                                   <ArrowRight />
                              </Button>
                              {getYear && (
                                   <Button className="cursor-pointer rounded-full border border-black bg-transparent py-6 text-black hover:bg-transparent lg:py-4">
                                        <Calendar size={22} />
                                        <span className="text-base font-medium"> {getYear} год</span>
                                   </Button>
                              )}
                         </div>
                    </header>

                    {cover ? (
                         <figure>
                              {/* {photos.length === 1 ? (
                              <Image src={photos[0]} alt={title} className="w-full" width={630} height={430} />
                         ) : photos.length > 1 ? (
                              <>
                                   <figure className="relative hidden lg:block">
                                        <>
                                             <Swiper
                                                  modules={[Pagination, Navigation, A11y]}
                                                  spaceBetween={50}
                                                  slidesPerView={1}
                                                  navigation={{
                                                       nextEl: '.swiper-button-next',
                                                       prevEl: '.swiper-button-prev',
                                                  }}
                                                  pagination={{
                                                       el: '.custom-pagination',
                                                       clickable: true,
                                                  }}
                                                  scrollbar={{ draggable: true }}
                                             >
                                                  {photos.map((p, i) => (
                                                       <SwiperSlide key={i}>
                                                            <Image
                                                                 src={p}
                                                                 alt={title}
                                                                 className="w-full"
                                                                 width={630}
                                                                 height={430}
                                                            />
                                                       </SwiperSlide>
                                                  ))}
                                             </Swiper>

                                             <div className="swiper-button-prev absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer rounded-full border border-[#EAEAEA] bg-white p-2">
                                                  <CaretLeftIcon size={18} weight="bold" />
                                             </div>
                                             <div className="swiper-button-next absolute top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer rounded-full border border-[#EAEAEA] bg-white p-2 text-black hover:text-gray-600">
                                                  <CaretRightIcon size={18} weight="bold" />
                                             </div>

                                             <div className="custom-pagination mt-2 flex justify-center gap-x-2" />
                                        </>
                                   </figure>
                                   <figure className="relative block lg:hidden">
                                        <>
                                             <SwiperRowLayout slidesPerViews={1.1}>
                                                  {photos.map((p, i) => (
                                                       <SwiperSlide key={i}>
                                                            <Image
                                                                 src={p}
                                                                 alt={title}
                                                                 className="w-full"
                                                                 width={630}
                                                                 height={430}
                                                            />
                                                       </SwiperSlide>
                                                  ))}
                                             </SwiperRowLayout>
                                        </>
                                   </figure>
                              </>
                         ) : null} */}
                              <div className="relative flex gap-4">
                                   <Image
                                        src={blogImage}
                                        alt={title || ''}
                                        className="aspect-[16/9] w-full grow rounded-3xl object-cover"
                                        width={630}
                                        height={430}
                                   />

                                   <Image
                                        src={blogImage}
                                        alt={title || ''}
                                        className="hidden aspect-[16/9] max-w-1/3 rounded-3xl object-cover lg:block"
                                        width={630}
                                        height={430}
                                   />

                                   <div className="swiper-button-prev absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer rounded-full border border-[#EAEAEA] bg-white p-3">
                                        <CaretLeftIcon size={18} weight="bold" />
                                   </div>
                                   <div className="swiper-button-next absolute top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer rounded-full border border-[#EAEAEA] bg-white p-3 text-black hover:text-gray-600">
                                        <CaretRightIcon size={18} weight="bold" />
                                   </div>
                                   <div className="absolute right-12 -bottom-3 hidden lg:block">
                                        <button
                                             type="button"
                                             style={{
                                                  background:
                                                       'radial-gradient(329.7% 3126.53% at 324.79% -211.84%, #00080A 74.04%, #006A74 89.42%, #C2FFF9 100%)',
                                             }}
                                             className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-[2.25rem] px-12 py-6"
                                        >
                                             <EnvelopeIcon />
                                             <span className="text-sm font-medium text-white">Оставить заявку</span>
                                        </button>
                                   </div>
                              </div>
                         </figure>
                    ) : null}

                    {/* <section
                         className={cn('flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between', {
                              'lg:justify-start':
                                   technologies.length < 1 || subcategories.length < 1 || categories.length < 1,
                         })}
                    >
                         {technologies.length > 0 && <CaseTechnologySection technologies={technologies} />}
                         {services.length > 0 && <CaseServiceSection services={services} />}
                         {categories.length > 0 && <CaseCategorySection categories={categories} />}
                    </section> */}

                    <section
                         className={cn(
                              'flex flex-col gap-4 lg:max-w-5xl lg:flex-row lg:items-start lg:justify-between',
                         )}
                    >
                         <CaseTechnologySection technologies={[{ name: 'dsadas', image: null }]} />
                         <CaseServiceSection services={[{ name: 'dsadas', image: null }]} />
                         <CaseCategorySection categories={['dsadas']} />
                    </section>

                    <section data-dark="false" aria-labelledby="benefits-heading" className="flex flex-col gap-y-5">
                         <h2 id="benefits-heading" className="text-4xl font-bold tracking-tight lg:text-6xl">
                              Мы достигли
                         </h2>
                         {/* <div className="flex flex-wrap gap-2.5">
                              {destinations.map(({ description, name }, indx) => (
                                   <div
                                        key={`${indx}-${name}`}
                                        className="min-w-96 rounded-full bg-[#F6F7FB] px-3 py-2.5"
                                   >
                                        <div className="flex items-center gap-3">
                                             <div className="flex items-center justify-center rounded-full bg-[#51535B] p-1">
                                                  <StarIcon color="#F6F7FB" size={12} weight="fill" />
                                             </div>
                                             <div className="flex flex-col">
                                                  <h4 className="text-sm font-bold text-black">{name}:</h4>
                                                  <p className="max-w-80 truncate text-sm font-normal text-black">
                                                       {description}
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div> */}
                         <div className="flex flex-wrap gap-2.5">
                              {Array.from({ length: 8 }).map((_, indx) => (
                                   <div
                                        key={`${indx}`}
                                        className="w-full max-w-xs rounded-full bg-[#F6F7FB] px-3 py-2.5"
                                   >
                                        <div className="flex items-center gap-3">
                                             <div className="flex items-center justify-center rounded-full bg-[#51535B] p-1">
                                                  <StarIcon color="#F6F7FB" size={12} weight="fill" />
                                             </div>
                                             <div className="flex flex-col">
                                                  <h4 className="text-sm font-bold text-black">{'test'}:</h4>
                                                  <p className="max-w-80 truncate text-sm font-normal text-black">
                                                       {'df'}
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </section>

                    {/* <CaseHistory projectHistory={blocks} /> */}

                    <section data-dark="false" aria-labelledby="more-cases-heading" className="flex flex-col gap-6">
                         <h2 id="more-cases-heading" className="text-4xl font-bold tracking-tight lg:text-6xl">
                              Больше кейсов
                         </h2>
                         <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-2">
                              {Array.from({ length: 2 }).map((project, indx) => (
                                   <CaseCard
                                        key={`${indx}`}
                                        post={{
                                             id: '',
                                             slug: '/',
                                             title: 'Test',
                                             cover: { url: blogImage.src },
                                             excerpt: '/',
                                        }}
                                   />
                              ))}
                         </div>
                    </section>
                    <AllProjectsButton link={RoutesEnum.cases} title="Все проекты" />
                    <div className="block lg:hidden">
                         <LeaveRequest />
                    </div>
               </article>
          </main>
     )
}
