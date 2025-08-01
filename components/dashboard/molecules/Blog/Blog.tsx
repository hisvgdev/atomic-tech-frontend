import ArticleCards from '@/components/dashboard/molecules/ArticleCards'
import { getTopRatedCasesItem } from '@/utils/api/top-rated-cases/top-rated-cases.api'
import React, { FC } from 'react'

import { BlogProps } from './Blog.types'
import BlogHeading from './BlogHeading'
import BlogTechnology from './BlogTechnology'

export const Blog: FC<BlogProps> = async () => {
    const topRated = await getTopRatedCasesItem()
    console.log(topRated)
    if (!topRated) return null
    return (
        <section data-dark="false" className="flex flex-col gap-12">
            <div className="flex flex-col-reverse items-start gap-8 lg:items-center lg:flex-row">
                <ArticleCards topRated={topRated} />
                <BlogHeading />
            </div>
            <hr className="" />
            <BlogTechnology />
        </section>
    )
}
