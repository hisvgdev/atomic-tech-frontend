import Reader from '@/components/article/organism'
import { getBlog } from '@/utils/api/blogs/blog'
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: Promise<{ articleId: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata,
): Promise<Metadata> {
    const { articleId } = await params

    const blog = await getBlog(articleId)

    const { title, description, image } = blog?.data ?? {}

    return {
        title: title,
        description: description,
        openGraph: {
            type: 'website',
            locale: 'ru_RU',
            url: `https://atomic-tech.ru/articles/${articleId}`,
            title: 'Atomic Tech - Твоя страница со статьями',
            siteName: 'Atomic Tech',
            description: `Atomic Tech - Твоя страница со статьей - ${title}-${description}`,
            images: [
                {
                    url: image || '',
                    type: 'image/svg+xml',
                    width: 1200,
                    height: 630,
                },
                {
                    url: image || '',
                    type: 'image/png',
                    width: 256,
                    height: 256,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Atomic Tech - Твоя страница со статьями',
            description: `Atomic Tech - Твоя страница со статьей - ${title}-${description}`,
            site: '@atomictech',
            images: [image || ''],
        },
        icons: {
            icon: [image || '', '/icons/icon-192x192.png', '/icons/icon-512x512.png'],
            apple: '/icons/apple-touch-icon.png',
        },
    }
}

export default async function Article({ params }: Props) {
    const { articleId } = await params
    const blog = await getBlog(articleId)

    if (!blog) return null

    return <Reader blog={blog} />
}
