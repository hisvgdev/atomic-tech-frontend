import BannerWithTags from '@/shared/global/BannerWithTags'

import ArticlesCards from '../molecules/ArticlesCards'

export const Grid = () => {
    return (
        <div className="flex flex-col gap-y-10">
            <BannerWithTags bannerTitle="Статьи" />
            <hr />
            <ArticlesCards />
        </div>
    )
}
