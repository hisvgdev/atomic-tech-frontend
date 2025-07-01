import CaseHistory from '@/components/cases/molecules/CaseHistory'
import AllProjectsButton from '@/components/dashboard/molecules/AllProjectsButton'
import { Button } from '@/components/ui/button'
import { mockProjects } from '@/constants/project.constants'
import CaseCard from '@/shared/global/CaseCard'
import { StarIcon } from '@phosphor-icons/react/dist/ssr'
import { ArrowRight, Calendar, Globe } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'

import CaseCategorySection from '../molecules/CaseCategorySection'
import CaseServiceSection from '../molecules/CaseServiceSection'
import CaseTechnologySection from '../molecules/CaseTechnologySection'
import { CaseGridProps } from './CaseGrid.types'

export const CaseGrid: FC<CaseGridProps> = (props) => {
    const { badgeContent, coverImage, description, title } = props
    return (
        <main className="h-full w-full">
            <article className="flex flex-col gap-y-16">
                <header className="flex items-center justify-between">
                    <div className="flex items-center gap-x-10">
                        <h1 className="text-7xl font-bold">ИННОВАТИКА</h1>
                        <p className="text-2xl max-w-2xl text-primary-300">{description}</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <Button className="border border-black py-4 rounded-full bg-transparent cursor-pointer text-black hover:bg-transparent">
                            <Globe size={22} />
                            <span className="font-medium text-base">innovatica.ru</span>
                            <ArrowRight />
                        </Button>
                        <Button className="border border-black py-4 rounded-full bg-transparent cursor-pointer text-black hover:bg-transparent">
                            <Calendar size={22} />
                            <span className="font-medium text-base">2025 год</span>
                        </Button>
                    </div>
                </header>

                <figure>
                    <Image src={coverImage as StaticImageData} alt={title} className="w-full" />
                </figure>

                <section className="flex justify-between items-start gap-x-4">
                    <CaseTechnologySection />
                    <CaseServiceSection />
                    <CaseCategorySection />
                </section>

                <section
                    data-dark="false"
                    aria-labelledby="benefits-heading"
                    className="flex flex-col gap-y-5"
                >
                    <h2 id="benefits-heading" className="font-bold text-7xl">
                        Мы достигли
                    </h2>
                    <div className="flex flex-wrap gap-2.5">
                        {badgeContent.map((badge, indx) => (
                            <div
                                key={`${indx}-${badge.title}`}
                                className="bg-[#F6F7FB] min-w-96 rounded-full py-2.5 px-3"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-1 bg-[#51535B] rounded-full flex items-center justify-center">
                                        <StarIcon color="#F6F7FB" size={12} weight="fill" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-black text-sm font-bold">
                                            {badge.title}:
                                        </h4>
                                        <p className="text-black text-sm font-normal max-w-80 truncate">
                                            {badge.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <CaseHistory />

                <section
                    data-dark="false"
                    aria-labelledby="more-cases-heading"
                    className="flex flex-col gap-y-6"
                >
                    <h2 id="more-cases-heading" className="font-bold text-7xl">
                        Больше кейсов
                    </h2>
                    <div className="flex items-center gap-x-4">
                        {mockProjects.slice(0, 2).map((project, indx) => (
                            <CaseCard key={`${project.id}-${indx + 1}`} {...project} />
                        ))}
                    </div>
                </section>

                <div className="mb-1">
                    <AllProjectsButton />
                </div>
            </article>
        </main>
    )
}
