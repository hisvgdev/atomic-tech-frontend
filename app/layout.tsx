import { Manrope } from 'next/font/google'

import type { Metadata } from 'next'

import '@/styles/globals.css'

import AppLayout from '@/shared/global/AppLayout'
import { TanstackQueryProvider } from '@/shared/global/TanstackQueryProvider/TanstackQueryProvider'
import { YandexMetrika } from '@/shared/global/YandexMetrika/YandexMetrika'
import { Suspense } from 'react'

import { FaroProvider } from '@/lib/providers/FaroProvider'

const manrope = Manrope({
     variable: '--font-manrope',
     subsets: ['latin'],
     display: 'swap',
})

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const metadata: Metadata = {
     title: {
          default: 'Atomic Tech - Разработка программного обеспечения',
          template: '%s | Atomic Tech',
     },
     description: 'Создание инновационных решений и разработка программного обеспечения командой Atomic Tech.',
     metadataBase: baseURL ? new URL(baseURL) : undefined,
     keywords: [
          'Atomic Tech',
          'разработка программного обеспечения',
          'технологии',
          'инновации',
          'софт',
          'сайты',
          'web-разработка',
          'blockchain-разработка',
          'мобильные приложения',
     ],
     creator: 'Atomic Tech',
     category: 'Технологии и Разработка',
     twitter: {
          card: 'summary_large_image',
          title: 'Atomic Tech - Разработка программного обеспечения',
          description:
               'Создание инновационных решений, сервисов, и разработка программного обеспечения командой Atomic Tech.',
          images: [
               {
                    url: '/assets/images/metadata/root-atomic-code-image.png',
                    width: 1200,
                    height: 630,
                    alt: 'Atomic Tech - Разработка программного обеспечения',
               },
          ],
     },
     openGraph: {
          title: 'Atomic Tech - Разработка программного обеспечения',
          description: 'Создание инновационных решений и разработка программного обеспечения командой Atomic Tech.',
          url: baseURL ? new URL(baseURL) : undefined,
          type: 'website',
          images: [
               {
                    url: '/assets/images/metadata/root-atomic-code-image.png',
                    width: 1200,
                    height: 630,
                    alt: 'Atomic Tech - Разработка программного обеспечения',
               },
          ],
     },
}

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode
}>) {
     return (
          <html lang="ru">
               <body className={`${manrope.variable} antialiased`}>
                    <Suspense>
                         <YandexMetrika />
                    </Suspense>
                    <FaroProvider>
                         <TanstackQueryProvider>
                              <AppLayout>{children}</AppLayout>
                         </TanstackQueryProvider>
                    </FaroProvider>
               </body>
          </html>
     )
}
