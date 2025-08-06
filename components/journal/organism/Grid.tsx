'use client'

import AllProjectsButton from '@/components/dashboard/molecules/AllProjectsButton'
import { Skeleton } from '@/components/ui/skeleton'
import ArticleCard from '@/shared/global/ArticleCard'
import { getBlogCategories } from '@/utils/api/blogs/blog-categories/blog-categories'
import { getJournalBlogs } from '@/utils/api/journal-blogs/journal-blogs'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

import BlockchainSection from '../molecules/BlockchainSection'
import BusinessSection from '../molecules/BusinessSection'
import DesignSection from '../molecules/DesignSection'
import Heading from '../molecules/Heading'
import LifestyleSection from '../molecules/LifestyleSection'
import MailingSection from '../molecules/MailingSection'
import NeuralNetworksArticle from '../molecules/NeuralNetworksArticle'
import NewSection from '../molecules/NewSection'
import OtherTags from '../molecules/OtherTags'
import SMMSection from '../molecules/SMMSection'
import SpecialProjectSection from '../molecules/SpecialProjectSection'

export const Grid = () => {
    const searchParams = useSearchParams()

    const blogCategoryId = searchParams.get('blog_category_id') ?? ''

    const { data: blogCategoriesData, isLoading: isBlogCategoriesDataLoading } = useQuery({
        queryKey: ['blog-categories', blogCategoryId],
        queryFn: async () =>
            await getBlogCategories({
                search: blogCategoryId,
            }),
        staleTime: 3000,
    })

    const {
        data: journalData,
        isLoading: isJournalDataLoading,
        isError: isJournalDataError,
    } = useQuery({
        queryKey: ['blogs', blogCategoryId],
        enabled: !blogCategoryId || !!blogCategoriesData,
        queryFn: async () => {
            const params: Record<string, any> = {}

            if (blogCategoryId && blogCategoriesData?.data[0]?.id) {
                params.blog_category_id = String(blogCategoriesData.data[0].id)
            }

            return await getJournalBlogs(params)
        },
        staleTime: 3000,
    })

    if (isJournalDataLoading || isBlogCategoriesDataLoading) {
        return (
            <div className="flex gap-8 flex-wrap items-center w-full">
                {Array.from({ length: 12 }).map((_, idx) => (
                    <div key={idx} className="flex flex-col space-y-3">
                        <Skeleton className="h-96 min-w-3xl rounded-xl" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-72" />
                            <Skeleton className="h-4 w-64" />
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    if (isJournalDataError) {
        return <div>Error of the get journal data. Check the devtools</div>
    }

    const now = new Date()
    const threeDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

    const newJournalData = journalData?.data.filter((s) => {
        const createdAt = new Date(s.created_at)
        return createdAt >= threeDaysAgo && createdAt <= now
    })

    return (
        <div className="flex flex-col gap-y-24 overflow-y-auto px-2 lg:px-0">
            {blogCategoryId ? (
                <section data-dark="false" className="flex flex-col gap-y-4">
                    <Heading title={blogCategoryId} desc="Самые свежие статьи в Proger" path="/" />
                    <div className="flex flex-col gap-5 w-full min-h-full lg:flex-row lg:items-center lg:justify-center">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {(journalData?.data || []).map((d) => (
                                <ArticleCard
                                    key={d.id}
                                    title={d.title}
                                    date={new Date(d.created_at).toISOString().split('T')[0]}
                                    imgCover={d.image || ''}
                                    href={`/articles/${d.id}`}
                                    classNames="w-full h-full"
                                    ratingPosition="bottom"
                                    tag={d.category.name}
                                    withTag
                                />
                            ))}
                        </div>
                    </div>
                </section>
            ) : (
                <>
                    <NewSection newJournalData={newJournalData || []} />
                    <NeuralNetworksArticle />
                    <OtherTags />
                    <BlockchainSection />
                    <MailingSection />
                    <LifestyleSection />
                    <SpecialProjectSection />
                    <DesignSection />
                    <SMMSection />
                    <BusinessSection />
                </>
            )}
            <AllProjectsButton link="/articles" title="Все статьи" />
        </div>
    )
}
