import BannerWithTags from '@/shared/global/BannerWithTags'
import React from 'react'

export default function Layout(props: LayoutProps<'/'>) {
     const { children } = props
     return (
          <div className="flex h-full flex-col gap-8 overflow-hidden lg:gap-16">
               <BannerWithTags />
               {children}
          </div>
     )
}
