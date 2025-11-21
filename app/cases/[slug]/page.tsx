import CaseGrid from '@/components/cases/case/organism'
import { AtomicClient } from '@/utils/shared/atomic-client/atomic-client'
import { Metadata, ResolvingMetadata } from 'next'
import { redirect } from 'next/navigation'

type Props = {
     params: Promise<{ slug: string }>
     searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
     const { slug } = await params

     const atomicClient = new AtomicClient({
          baseURL: process.env.NEXT_PUBLIC_API_BASE_URL!,
          keycloak: {
               serverUrl: process.env.NEXT_PUBLIC_KEYCLOAK_SERVER_URL!,
               realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM!,
               clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID!,
               clientSecret: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_SECRET!,
          },
     })

     await atomicClient.ready

     const findedCase = await atomicClient.posts.get(slug)

     const { cover, title, excerpt } = findedCase

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
                         url: cover?.url || '',
                         type: 'image/svg+xml',
                         width: 1200,
                         height: 630,
                    },
                    {
                         url: cover?.url || '',
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
               images: [cover?.url || ''],
          },
          icons: {
               icon: [cover?.url || '', '/icons/icon-192x192.png', '/icons/icon-512x512.png'],
               apple: '/icons/apple-touch-icon.png',
          },
     }
}

export default async function Case({ params }: Props) {
     const { slug } = await params

     const atomicClient = new AtomicClient({
          baseURL: process.env.NEXT_PUBLIC_API_BASE_URL!,
          keycloak: {
               serverUrl: process.env.NEXT_PUBLIC_KEYCLOAK_SERVER_URL!,
               realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM!,
               clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID!,
               clientSecret: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_SECRET!,
          },
     })

     await atomicClient.ready

     const findedCase = await atomicClient.posts.get(slug)

     // const relatedCaseItem = await getRelatedCaseItem(Number(slug))

     if (!findedCase) return redirect('/not-found')

     return <CaseGrid findedCase={findedCase} relatedCase={{}} />
}
