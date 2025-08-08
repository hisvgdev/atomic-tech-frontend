import ArticleCards from '@/components/dashboard/molecules/ArticleCards'
import React, { FC } from 'react'

import { BlogProps } from './Blog.types'
import BlogHeading from './BlogHeading'
import BlogTechnology from './BlogTechnology'

export const Blog: FC<BlogProps> = () => {
     return (
          <section data-dark="false" className="flex flex-col gap-12 px-4 lg:px-8">
               <div className="flex flex-col-reverse items-start gap-8 lg:flex-row lg:items-center">
                    <ArticleCards />
                    <BlogHeading />
               </div>
               <hr className="" />
               <BlogTechnology />
          </section>
     )
}
