'use client'

import AllProjectsButton from '@/components/dashboard/molecules/AllProjectsButton'
import { Skeleton } from '@/components/ui/skeleton'
import { getJournalBlogs } from '@/utils/api/journal-blogs/journal-blogs'
import { useQuery } from '@tanstack/react-query'

import BusinessSection from '../molecules/BusinessSection'
import DesignSection from '../molecules/DesignSection'
import EmailSection from '../molecules/EmailSection'
import LifestyleSection from '../molecules/LifestyleSection'
import MailingSection from '../molecules/MailingSection'
import NeuralNetworksArticle from '../molecules/NeuralNetworksArticle'
import NewSection from '../molecules/NewSection'
import OtherTags from '../molecules/OtherTags'
import SMMSection from '../molecules/SMMSection'
import SpecialProjectSection from '../molecules/SpecialProjectSection'

export const Grid = () => {
    const {
        data: journalData,
        isLoading: isJournalDataLoading,
        isError: isJournalDataError,
    } = useQuery({
        queryKey: ['journal-blogs'],
        queryFn: async () => await getJournalBlogs(),
    })
    if (isJournalDataLoading) {
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

    return (
        <div className="flex flex-col gap-y-24 overflow-y-auto px-2 lg:px-0">
            <NewSection />
            <NeuralNetworksArticle />
            <OtherTags />
            <EmailSection />
            <MailingSection />
            <LifestyleSection />
            <SpecialProjectSection />
            <DesignSection />
            <SMMSection />
            <BusinessSection />
            <AllProjectsButton link="/articles" title="Все статьи" />
        </div>
    )
}
