'use client'

import CaseHistory from '@/components/cases/molecules/CaseHistory'
import AllProjectsButton from '@/components/dashboard/molecules/AllProjectsButton'
import { Button } from '@/components/ui/button'
import LeaveRequest from '@/shared/global/LeaveRequest'
import { StarIcon } from '@phosphor-icons/react/dist/ssr'
import { ArrowRight, Calendar, Globe } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'

import type { FC } from 'react'

import CaseCategorySection from '../molecules/CaseCategorySection'
import CaseServiceSection from '../molecules/CaseServiceSection'
import CaseTechnologySection from '../molecules/CaseTechnologySection'
import { CaseGridProps } from './CaseGrid.types'

import 'swiper/css'
import 'swiper/css/pagination'

import { EnvelopeIcon } from '@/shared/icons/EnvelopeIcon/EnvelopeIcon'
import { filterTagsByType } from '@/utils/filterTagsByType/filterTagsByType'
import { CaretLeftIcon, CaretRightIcon, EnvelopeSimpleIcon } from '@phosphor-icons/react'
import { A11y, Navigation, Pagination } from 'swiper/modules'

import { cn } from '@/lib/utils'

import { RoutesEnum } from '@/types/Routes.types'
import { TaxonomiesType } from '@/types/Taxonomies.types'

import MoreCases from '../molecules/MoreCases'

export const CaseGrid: FC<CaseGridProps> = (props) => {
     const { findedCase } = props
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
          covers,
          custom_fields,
          excerpt,
          published_at,
          reading_time_min,
     } = findedCase

     const safeCustomFields = findedCase.custom_fields ?? {}
     const linkToCase = safeCustomFields.link_to_case ?? ''
     const formattedWebsiteLink = linkToCase ? linkToCase.split('/')[2] : ''

     const getYear = new Date(updated_at || '').getFullYear()

     const categories = filterTagsByType(taxonomies || [], [TaxonomiesType.case_categories])
     const services = filterTagsByType(taxonomies || [], [TaxonomiesType.services, TaxonomiesType.case_categories])
     const technologies = filterTagsByType(taxonomies || [], [TaxonomiesType.stack])
     const rawFindedCase = findedCase?.custom_fields?.results
     const destinations = typeof rawFindedCase === 'string' ? JSON.parse(rawFindedCase) : []

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
                              <Button
                                   variant="ghost"
                                   className="cursor-pointer rounded-full bg-transparent py-6 text-black ring ring-black hover:ring-0 lg:py-4"
                              >
                                   <Globe size={22} />
                                   <Link href={linkToCase as any} target="_blank" className="text-base font-medium">
                                        {formattedWebsiteLink}
                                   </Link>
                                   <ArrowRight />
                              </Button>
                              {getYear && (
                                   <Button
                                        variant="ghost"
                                        className="cursor-pointer rounded-full bg-transparent py-6 text-black ring ring-black hover:ring-0 lg:py-4"
                                   >
                                        <Calendar size={22} />
                                        <span className="text-base font-medium"> {getYear} год</span>
                                   </Button>
                              )}
                         </div>
                    </header>
                    {covers && covers.length > 0 ? (
                         <figure className="flex flex-col gap-4">
                              <div className="relative flex h-full gap-4">
                                   <Swiper
                                        modules={[Navigation, A11y, Pagination]}
                                        navigation={{
                                             nextEl: '.swiper-button-next',
                                             prevEl: '.swiper-button-prev',
                                        }}
                                        pagination={{
                                             el: '.custom-pagination',
                                             clickable: true,
                                        }}
                                        slidesPerView={1}
                                        spaceBetween={20}
                                        className="w-full flex-1"
                                   >
                                        {covers.map((c, i) => (
                                             <SwiperSlide key={i}>
                                                  <div className="flex gap-4">
                                                       <div className="flex-1">
                                                            <Image
                                                                 src={c.url}
                                                                 alt={c.filename || `cover-${i}`}
                                                                 width={630}
                                                                 height={430}
                                                                 className="h-[40rem] w-full rounded-3xl object-cover"
                                                            />
                                                       </div>

                                                       {covers[i + 1] && (
                                                            <div className="hidden w-1/3 lg:block">
                                                                 <Image
                                                                      src={covers[i + 1].url}
                                                                      alt={covers[i + 1].filename || `cover-${i + 1}`}
                                                                      width={210}
                                                                      height={430}
                                                                      className="h-[40rem] w-full rounded-3xl object-cover"
                                                                 />
                                                            </div>
                                                       )}
                                                  </div>
                                             </SwiperSlide>
                                        ))}
                                   </Swiper>
                                   <div className="custom-pagination mt-2 flex justify-center gap-x-2" />

                                   <div className="swiper-button-prev absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer rounded-full border border-[#EAEAEA] bg-white p-3">
                                        <CaretLeftIcon size={18} weight="bold" />
                                   </div>
                                   <div className="swiper-button-next absolute top-1/2 right-8 z-10 -translate-y-1/2 cursor-pointer rounded-full border border-[#EAEAEA] bg-white p-3 text-black hover:text-gray-600">
                                        <CaretRightIcon size={18} weight="bold" />
                                   </div>
                                   <div className="absolute right-12 -bottom-3 z-20 hidden lg:block">
                                        <Link href="/#bottom">
                                             <button
                                                  type="button"
                                                  style={{
                                                       background:
                                                            'radial-gradient(329.7% 3126.53% at 324.79% -211.84%, #00080A 74.04%, #006A74 89.42%, #C2FFF9 100%)',
                                                  }}
                                                  className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-[2.25rem] px-12 py-6"
                                             >
                                                  <EnvelopeIcon />
                                                  <span className="text-sm font-medium text-white">
                                                       Оставить заявку
                                                  </span>
                                             </button>
                                        </Link>
                                   </div>
                              </div>
                              <div className="flex items-center gap-2">
                                   {covers.map((c, i) => (
                                        <Image
                                             key={i}
                                             src={c.url}
                                             alt={c.filename || `cover-${i}`}
                                             width={225}
                                             height={115}
                                             className="w-full max-w-40 rounded-3xl object-cover"
                                        />
                                   ))}
                              </div>
                         </figure>
                    ) : null}

                    <section
                         className={cn('flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between', {
                              'lg:justify-start': technologies.length < 1,
                         })}
                    >
                         {technologies.length > 0 && <CaseTechnologySection technologies={technologies} />}
                         {services.length > 0 && <CaseServiceSection services={services} />}
                         {categories.length > 0 && <CaseCategorySection categories={categories} />}
                    </section>
                    <section
                         className={cn(
                              'flex flex-col gap-4 lg:max-w-5xl lg:flex-row lg:items-start lg:justify-between',
                         )}
                    ></section>
                    <section data-dark="false" aria-labelledby="benefits-heading" className="flex flex-col gap-y-5">
                         <h2 id="benefits-heading" className="text-4xl font-bold tracking-tight lg:text-6xl">
                              Мы достигли
                         </h2>
                         <div className="flex flex-wrap gap-2.5">
                              {destinations.map((d: { title: string; content: string }, indx: number) => (
                                   <div
                                        key={`${indx}-${d.title}`}
                                        className="min-w-96 rounded-full bg-[#F6F7FB] px-3 py-2.5"
                                   >
                                        <div className="flex items-center gap-3">
                                             <div className="flex items-center justify-center rounded-full bg-[#51535B] p-1">
                                                  <StarIcon color="#F6F7FB" size={12} weight="fill" />
                                             </div>
                                             <div className="flex flex-col">
                                                  <h4 className="text-sm font-bold text-black">{d.title}:</h4>
                                                  <p className="max-w-80 truncate text-sm font-normal text-black">
                                                       {d.content}
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </section>
                    {blocks && <CaseHistory blocks={blocks} />}
                    <MoreCases />
                    <AllProjectsButton link={RoutesEnum.cases} title="Все проекты" />
                    <div className="block lg:hidden">
                         <LeaveRequest />
                    </div>
               </article>
          </main>
     )
}
