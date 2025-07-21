'use client'

import AllProjectsButton from '@/components/dashboard/molecules/AllProjectsButton'

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
            <AllProjectsButton title="Все статьи" />
        </div>
    )
}
