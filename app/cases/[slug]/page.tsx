import CaseGrid from '@/components/cases/case/organism'
import { AtomicClient } from '@/utils/shared/atomic-client/atomic-client'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateMetadata(props: PageProps<'/cases/[slug]'>): Promise<Metadata> {
     const { slug } = await props.params

     const atomicClient = new AtomicClient({
          baseURL: process.env.NEXT_PUBLIC_API_BASE_URL!,
     })

     await atomicClient.ready

     const findedCase = await atomicClient.posts.get(slug)

     const { covers, title, excerpt } = findedCase

     return {
          title: title,
          description: excerpt,
          openGraph: {
               type: 'website',
               locale: 'ru_RU',
               url: `https://atomic-tech.ru/cases/${slug}`,
               title: 'Atomic Tech - Твоя страница с кейсами',
               siteName: 'Atomic Tech',
               description: `Atomic Tech - Твоя страница с кейсам - ${title}-${excerpt}`,
               images: [
                    {
                         url: covers?.[0]?.url ?? '/assets/images/metadata/root-atomic-code-image.png',
                         type: 'image/svg+xml',
                         width: 1200,
                         height: 630,
                    },
                    {
                         url: covers?.[0]?.url ?? '/assets/images/metadata/root-atomic-code-image.png',
                         type: 'image/png',
                         width: 256,
                         height: 256,
                    },
               ],
          },
          twitter: {
               card: 'summary_large_image',
               title: 'Atomic Tech - Твоя страница с кейсами',
               description: `Atomic Tech - Твоя страница с кейсом - ${title}-${excerpt}`,
               site: '@atomictech',
               images: [covers?.[0]?.url ?? '/assets/images/metadata/root-atomic-code-image.png'],
          },
          icons: {
               icon: [
                    covers?.[0]?.url ?? '/assets/images/metadata/root-atomic-code-image.png',
                    '/icons/icon-192x192.png',
                    '/icons/icon-512x512.png',
               ],
               apple: '/icons/apple-touch-icon.png',
          },
     }
}

export default async function Case(props: PageProps<'/cases/[slug]'>) {
     const { slug } = await props.params

     const atomicClient = new AtomicClient({
          baseURL: process.env.NEXT_PUBLIC_API_BASE_URL!,
     })

     await atomicClient.ready

     const findedCase = await atomicClient.posts.get(slug)

     if (!findedCase) return notFound()

     return <CaseGrid findedCase={findedCase} />
}
