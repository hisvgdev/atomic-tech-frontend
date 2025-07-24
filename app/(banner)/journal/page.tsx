import { Grid } from '@/components/journal/organism/Grid'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Статьи',
    description: 'Это страница с статьями, которые разрабатываются нашей командой Atomic',
    keywords: 'статьи, Atomic команда, разработка, блог, технологии, инновации',
    openGraph: {
        title: 'Статьи',
        description: 'Это страница с статьями, которые разрабатываются нашей командой Atomic',
        url: 'https://atomic-tech.ru/articles',
        type: 'website',
        images: [
            {
                url: 'https://atomic-tech.ru/assets/images/metadata/root-atomic-code-image.png',
                width: 1200,
                height: 630,
                alt: 'Статьи от команды Atomic',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Статьи',
        description: 'Это страница с статьями, которые разрабатываются нашей командой Atomic',
        images: [
            {
                url: 'https://atomic-tech.ru/assets/images/metadata/root-atomic-code-image.png',
                width: 1200,
                height: 630,
                alt: 'Статьи от команды Atomic',
            },
        ],
    },
    category: 'Статьи',
}

export default function Articles() {
    return <Grid />
}
