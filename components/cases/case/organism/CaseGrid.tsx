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

import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react'
import { A11y, Navigation, Pagination } from 'swiper/modules'

import { cn } from '@/lib/utils'

export const CaseGrid: FC<CaseGridProps> = (props) => {
     const { findedCase, relatedCase } = props
     const {
          categories,
          destinations,
          id,
          photos,
          subcategories,
          technologies,
          website_link,
          description,
          title,
          updated_at,
          project_history,
     } = findedCase

     const formatedWebsiteLink = website_link ? website_link.split('/')[2] : ''
     const getYear = new Date(updated_at).getFullYear()

     return (
          <main className="h-full w-full overflow-y-auto px-3.5 lg:px-6">
               <article className="flex flex-col gap-y-16">
                    <header className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
                         <div className="flex max-w-72 flex-col items-start gap-4 lg:max-w-full lg:flex-row lg:items-center lg:gap-10">
                              <h1 className="text-4xl font-bold -tracking-[0.23rem] lg:text-7xl">
                                   {title.toUpperCase()}
                              </h1>
                              <p className="text-primary-300 text-base lg:max-w-2xl lg:text-2xl">{description}</p>
                         </div>
                         <div className="flex items-center gap-x-2">
                              {formatedWebsiteLink && (
                                   <Button className="cursor-pointer rounded-full border border-black bg-transparent py-6 text-black hover:bg-transparent lg:py-4">
                                        <Globe size={22} />
                                        <Link href={website_link} target="_blank" className="text-base font-medium">
                                             {formatedWebsiteLink}
                                        </Link>
                                        <ArrowRight />
                                   </Button>
                              )}
                              <Button className="cursor-pointer rounded-full border border-black bg-transparent py-6 text-black hover:bg-transparent lg:py-4">
                                   <Calendar size={22} />
                                   <span className="text-base font-medium"> {getYear} год</span>
                              </Button>
                         </div>
                    </header>

                    <figure>
                         {photos.length < 1 ? (
                              <Image src={photos[0]} alt={title} className="w-full" width={630} height={430} />
                         ) : (
                              <figure className="relative">
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

                                        {/* Стрелки по центру */}
                                        <div className="swiper-button-prev absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer rounded-full border border-[#EAEAEA] bg-white p-2">
                                             <CaretLeftIcon size={18} weight="bold" />
                                        </div>
                                        <div className="swiper-button-next absolute top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer rounded-full border border-[#EAEAEA] bg-white p-2 text-black hover:text-gray-600">
                                             <CaretRightIcon size={18} weight="bold" />
                                        </div>

                                        <div className="custom-pagination mt-2 flex justify-center gap-x-2" />
                                   </>
                              </figure>
                         )}
                    </figure>

                    <section
                         className={cn('flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between', {
                              'lg:justify-start':
                                   technologies.length < 1 || subcategories.length < 1 || categories.length < 1,
                         })}
                    >
                         {technologies.length > 0 && <CaseTechnologySection technologies={technologies} />}
                         {subcategories.length > 0 && <CaseServiceSection subcategories={subcategories} />}
                         {categories.length > 0 && <CaseCategorySection categories={categories} />}
                    </section>

                    <section data-dark="false" aria-labelledby="benefits-heading" className="flex flex-col gap-y-5">
                         <h2 id="benefits-heading" className="text-5xl font-bold -tracking-[0.23rem] lg:text-7xl">
                              Мы достигли
                         </h2>
                         <div className="flex flex-wrap gap-2.5">
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
                         </div>
                    </section>

                    <CaseHistory projectHistory={project_history} />

                    <section data-dark="false" aria-labelledby="more-cases-heading" className="flex flex-col gap-y-6">
                         <h2 id="more-cases-heading" className="text-5xl font-bold -tracking-[0.23rem] lg:text-7xl">
                              Больше кейсов
                         </h2>
                         <div className="flex items-center gap-x-4">
                              {relatedCase.data.map((project, indx) => (
                                   <CaseCard key={`${project.id}-${indx + 1}`} {...project} />
                              ))}
                         </div>
                    </section>
                    <AllProjectsButton link="/cases" title="Все проекты" />
                    <div className="block lg:hidden">
                         <LeaveRequest />
                    </div>
               </article>
          </main>
     )
}
