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

    const formatedWebsiteLink = website_link.split('/')[2]
    const getYear = new Date(updated_at).getFullYear()

    return (
        <main className="h-full w-full overflow-y-auto">
            <article className="flex flex-col gap-y-16">
                <header className="flex flex-col items-start gap-4 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-col items-start gap-4 max-w-72 lg:max-w-full lg:flex-row lg:items-center lg:gap-10">
                        <h1 className="text-4xl font-bold -tracking-[0.23rem] lg:text-7xl">
                            {title.toUpperCase()}
                        </h1>
                        <p className="text-base text-primary-300 lg:text-2xl lg:max-w-2xl">
                            {description}
                        </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <Button className="border border-black py-6 rounded-full bg-transparent cursor-pointer text-black hover:bg-transparent lg:py-4">
                            <Globe size={22} />
                            <Link
                                href={website_link}
                                target="_blank"
                                className="font-medium text-base"
                            >
                                {formatedWebsiteLink}
                            </Link>
                            <ArrowRight />
                        </Button>
                        <Button className="border border-black py-6 rounded-full bg-transparent cursor-pointer text-black hover:bg-transparent lg:py-4">
                            <Calendar size={22} />
                            <span className="font-medium text-base"> {getYear} год</span>
                        </Button>
                    </div>
                </header>

                <figure>
                    {photos.length < 1 ? (
                        <Image
                            src={photos[0]}
                            alt={title}
                            className="w-full"
                            width={630}
                            height={430}
                        />
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
                                <div className="swiper-button-prev bg-white p-2 border border-[#EAEAEA] rounded-full absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer">
                                    <CaretLeftIcon size={18} weight="bold" />
                                </div>
                                <div className="swiper-button-next absolute p-2 bg-white border border-[#EAEAEA] rounded-full top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer text-black hover:text-gray-600">
                                    <CaretRightIcon size={18} weight="bold" />
                                </div>

                                <div className="custom-pagination flex justify-center gap-x-2 mt-2" />
                            </>
                        </figure>
                    )}
                </figure>

                <section className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-start">
                    <CaseTechnologySection technologies={technologies} />
                    <CaseServiceSection subcategories={subcategories} />
                    <CaseCategorySection categories={categories} />
                </section>

                <section
                    data-dark="false"
                    aria-labelledby="benefits-heading"
                    className="flex flex-col gap-y-5"
                >
                    <h2
                        id="benefits-heading"
                        className="font-bold text-5xl -tracking-[0.23rem] lg:text-7xl"
                    >
                        Мы достигли
                    </h2>
                    <div className="flex flex-wrap gap-2.5">
                        {destinations.map(({ description, name }, indx) => (
                            <div
                                key={`${indx}-${name}`}
                                className="bg-[#F6F7FB] min-w-96 rounded-full py-2.5 px-3"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-1 bg-[#51535B] rounded-full flex items-center justify-center">
                                        <StarIcon color="#F6F7FB" size={12} weight="fill" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-black text-sm font-bold">{name}:</h4>
                                        <p className="text-black text-sm font-normal max-w-80 truncate">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <CaseHistory projectHistory={project_history} />

                <section
                    data-dark="false"
                    aria-labelledby="more-cases-heading"
                    className="flex flex-col gap-y-6"
                >
                    <h2
                        id="more-cases-heading"
                        className="font-bold text-5xl -tracking-[0.23rem] lg:text-7xl"
                    >
                        Больше кейсов
                    </h2>
                    <div className="flex items-center gap-x-4">
                        {relatedCase.data.map((project, indx) => (
                            <CaseCard key={`${project.id}-${indx + 1}`} {...project} />
                        ))}
                    </div>
                </section>
                <AllProjectsButton title="Все проекты" />
                <div className="block lg:hidden">
                    <LeaveRequest />
                </div>
            </article>
        </main>
    )
}
