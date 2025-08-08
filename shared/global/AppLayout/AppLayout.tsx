import React, { FC } from 'react'

import Footer from '../Footer'
import Header from '../Header'
import { AppLayoutProps } from './AppLayout.props'

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
     return (
          <div className="flex min-h-screen flex-col">
               <Header />
               <div className="flex flex-col gap-14 lg:hidden">
                    <main className="themed-scrollbar flex-1 overflow-auto overscroll-none scroll-smooth px-0">
                         {children}
                    </main>
                    <Footer />
               </div>
               <div className="hidden lg:block">
                    <main className="themed-scrollbar flex-1 overflow-auto overscroll-none scroll-smooth px-0">
                         {children}
                    </main>
                    <Footer />
               </div>
          </div>
     )
}
