import Reader from '@/components/article/organism'
import { AtomicClient } from '@/utils/shared/atomic-client/atomic-client'
import { Metadata } from 'next'

export async function generateMetadata(props: PageProps<'/articles/[articleId]'>): Promise<Metadata> {
     const { articleId } = await props.params

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

     const findedArticle = await atomicClient.posts.get(articleId)

     const { cover, title, excerpt } = findedArticle

     return {
          title: title,
          description: excerpt,
          openGraph: {
               type: 'website',
               locale: 'ru_RU',
               url: `https://atomic-tech.ru/articles/${articleId}`,
               title: 'Atomic Tech - Твоя страница со статьями',
               siteName: 'Atomic Tech',
               description: `Atomic Tech - Твоя страница со статьей - ${title}-${excerpt}`,
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
               title: 'Atomic Tech - Твоя страница со статьями',
               description: `Atomic Tech - Твоя страница со статьей - ${title}-${excerpt}`,
               site: '@atomictech',
               images: [cover?.url || ''],
          },
          icons: {
               icon: [cover?.url || '', '/icons/icon-192x192.png', '/icons/icon-512x512.png'],
               apple: '/icons/apple-touch-icon.png',
          },
     }
}

export default async function Article(props: PageProps<'/articles/[articleId]'>) {
     const { articleId } = await props.params

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

     const findedArticle = await atomicClient.posts.get(articleId)

     return <Reader blog={findedArticle} />
}
