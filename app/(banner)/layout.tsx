import BannerWithTags from '@/shared/global/BannerWithTags'
import React from 'react'

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
     return (
          <div className="flex flex-col gap-10">
               <BannerWithTags />
               <hr />
               {children}
          </div>
     )
}
