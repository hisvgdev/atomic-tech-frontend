import React, { FC } from 'react'

import Footer from '../Footer'
import Header from '../Header'
import { AppLayoutProps } from './AppLayout.props'

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 overflow-auto overscroll-none themed-scrollbar scroll-smooth px-2 lg:px-7">
                {children}
            </main>
            <Footer />
        </div>
    )
}
