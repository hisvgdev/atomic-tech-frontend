import Reader from '@/components/article/organism'
import { AtomicClient } from '@/utils/shared/atomic-client/atomic-client'
import { AxiosError } from 'axios'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

const getPosts = async (slug: string) => {
     try {
          const atomicClient = new AtomicClient({
               baseURL: process.env.NEXT_PUBLIC_API_BASE_URL!,
          })
          await atomicClient.ready
          return await atomicClient.posts.get(slug)
     } catch (error) {
          if (error instanceof AxiosError) {
               console.error('Axios Error', error.response)
          } else {
               console.error('Default Error:', error)
          }
     }
}

export async function generateMetadata(props: PageProps<'/articles/[articleId]'>): Promise<Metadata> {
     const { articleId } = await props.params

     const findedArticle = await getPosts(articleId)

     if (!findedArticle) return {}

     const { covers, title, excerpt } = findedArticle

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
               title: 'Atomic Tech - Твоя страница со статьями',
               description: `Atomic Tech - Твоя страница со статьей - ${title}-${excerpt}`,
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

export default async function Article(props: PageProps<'/articles/[articleId]'>) {
     const { articleId } = await props.params

     const findedArticle = await getPosts(articleId)

     if (findedArticle) {
          return <Reader findedArticle={findedArticle} />
     } else {
          return notFound()
     }
}
