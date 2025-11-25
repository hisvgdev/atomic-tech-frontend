import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React, { FC } from 'react'

import { HeadingProps } from './Heading.types'

export const Heading: FC<HeadingProps> = (props) => {
     const { desc, title, path, query } = props
     const fullPath = `${path}?${query ?? ''}`
     return (
          <div className="flex flex-col gap-y-4">
               {!fullPath ? (
                    <h1 className="text-5xl font-bold">{title}</h1>
               ) : (
                    <div className="flex cursor-pointer items-center gap-x-4">
                         {/* @ts-ignore */}
                         <Link href={fullPath} className="text-5xl font-bold -tracking-[0.075rem]">
                              {title}
                         </Link>
                         <ArrowRight className="mt-2" />
                    </div>
               )}
               <p className="text-lg font-normal">{desc}</p>
          </div>
     )
}
