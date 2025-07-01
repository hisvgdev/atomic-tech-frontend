import ArticleCards from '@/components/dashboard/molecules/ArticleCards'
import React, { FC } from 'react'

import { BlogProps } from './Blog.types'
import BlogHeading from './BlogHeading'
import BlogTechnology from './BlogTechnology'

export const Blog: FC<BlogProps> = () => {
    return (
        <section data-dark="false" className="flex flex-col gap-y-12">
            <div className="flex items-center gap-x-8">
                <ArticleCards />
                <BlogHeading />
            </div>
            <hr className="w-5xl bg-red-900" />
            <BlogTechnology />
        </section>
    )
}
