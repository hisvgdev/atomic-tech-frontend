import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import GradientButton from '@/shared/custom/GradientButton'
import { StarIcon } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import React, { FC } from 'react'

import { CaseCardProps } from './CaseCard.types'

export const CaseCard: FC<CaseCardProps> = (props) => {
    const {
        categories,
        description,
        destinations,
        id,
        photos,
        subcategories,
        technologies,
        title,
        website_link,
    } = props

    return (
        <Card className="w-full h-full border-none shadow-none">
            <CardContent className="flex flex-col w-full h-full px-4">
                {/* cover image */}
                <div className="relative w-full h-full overflow-hidden rounded-[1.875rem] ring ring-primary-200">
                    {photos && (
                        <Image
                            src={photos[0]}
                            alt={title}
                            className="w-full h-full object-cover rounded-[1.875rem]"
                            width={620}
                            height={420}
                        />
                    )}
                    {/* benefits badge */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-4">
                        {destinations &&
                            destinations.map(({ name, description }, indxBdg) => (
                                <div
                                    key={`${indxBdg}-${name}`}
                                    className="bg-[#1C274C] w-auto rounded-full py-2.5 px-3 lg:min-w-80"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-1 bg-white rounded-full flex items-center justify-center">
                                            <StarIcon color="#1C274C" size={12} weight="fill" />
                                        </div>
                                        <div className="flex flex-col">
                                            <h4 className="text-white text-xs font-bold">
                                                {title}:
                                            </h4>
                                            <p className="text-white text-xs font-normal max-w-80 truncate">
                                                {description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* content */}
                <CardHeader className="p-0">
                    <div className="w-full flex items-start justify-between mt-4">
                        <div className="flex flex-col max-w-62 lg:max-w-lg lg:gap-4">
                            <CardTitle className="text-lg font-extrabold truncate lg:text-3xl">
                                {title}
                            </CardTitle>
                            <CardDescription className="font-medium text-black text-xs max-w-full truncate lg:text-sm">
                                {description}
                            </CardDescription>
                        </div>
                        <GradientButton
                            hasIsRoute
                            routePath={`/cases/${id}`}
                            title="Сайт"
                            classNames="rounded-full lg:py-6"
                        />
                    </div>
                </CardHeader>

                {/* tags */}
                <CardFooter className="w-full flex items-center flex-wrap gap-2 mt-4 p-0">
                    {categories &&
                        categories.map((tag, indxTag) => (
                            <div
                                key={`${indxTag}-${tag}`}
                                className="px-4 py-3 rounded-full ring ring-primary-100"
                            >
                                <div className="flex items-center gap-3">
                                    {/* <Image src={tag.icon} alt={tag} /> */}
                                    <span className="text-xs font-bold text-[#0F0F0F]">{tag}</span>
                                </div>
                            </div>
                        ))}
                </CardFooter>
            </CardContent>
        </Card>
    )
}
