import ArticleCards from '@/components/dashboard/molecules/ArticleCards'
import React, { FC } from 'react'

import { BlogProps } from './Blog.types'
import BlogHeading from './BlogHeading'
import BlogTechnology from './BlogTechnology'

export const Blog: FC<BlogProps> = () => {
     return (
          <section data-dark="false" className="flex flex-col gap-12 px-4 lg:px-8">
               <div className="flex flex-col items-start gap-4 lg:flex-row lg:gap-16">
                    <BlogHeading />
                    <ArticleCards />
               </div>
               <BlogTechnology />
          </section>
     )
}
