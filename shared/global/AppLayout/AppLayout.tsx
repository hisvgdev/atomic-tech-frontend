import React, { FC } from 'react'

import Footer from '../Footer'
import Header from '../Header'
import ReadMore from '../ReadMore'
import { AppLayoutProps } from './AppLayout.props'

export const AppLayout: FC<AppLayoutProps> = (props) => {
     const { children } = props
     return (
          <>
               <ReadMore />
               <div className="flex min-h-dvh flex-col">
                    <Header />
                    <div className="flex flex-col lg:hidden lg:gap-14">
                         <main className="themed-scrollbar flex-1 overflow-auto overscroll-none scroll-smooth px-0">
                              {children}
                         </main>
                         <Footer />
                    </div>
                    <div className="hidden flex-1 flex-col lg:flex">
                         <main className="themed-scrollbar flex-1 overflow-auto overscroll-none scroll-smooth px-0">
                              {children}
                         </main>
                         <Footer />
                    </div>
               </div>
          </>
     )
}
