import BannerWithTags from '@/shared/global/BannerWithTags'
import React from 'react'

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
     return (
          <div className="flex flex-col gap-y-10 px-4 lg:px-7">
               <BannerWithTags />
               <hr />
               {children}
          </div>
     )
}
