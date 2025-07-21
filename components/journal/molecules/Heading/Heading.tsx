import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React, { FC } from 'react'

import { HeadingProps } from './Heading.types'

export const Heading: FC<HeadingProps> = (props) => {
    const { desc, title, path } = props
    return (
        <div className="flex flex-col gap-y-4">
            {!path ? (
                <h1 className="font-bold text-5xl">{title}</h1>
            ) : (
                <div className="flex items-center gap-x-4 cursor-pointer">
                    <Link href={path} className="font-bold text-5xl -tracking-[0.075rem]">
                        {title}
                    </Link>
                    <ArrowRight className="mt-2" />
                </div>
            )}
            <p className="font-normal text-lg">{desc}</p>
        </div>
    )
}
