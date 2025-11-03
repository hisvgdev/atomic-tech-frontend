import CaseGrid from '@/components/cases/case/organism'
import { getBlocks } from '@/utils/api/blocks/blocks'
import { getCaseItem } from '@/utils/api/case-items/case-item'
import { getRelatedCaseItem } from '@/utils/api/case-items/related-case-item'
import { Metadata, ResolvingMetadata } from 'next'
import { redirect } from 'next/navigation'

type Props = {
     params: Promise<{ slug: string }>
     searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

// export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
//      const { slug } = await params

//      const findedCase = await getBlocks({ filter: { post_id: slug } })

//      const { content, created_at, id, order, post_id, type, updated_at } = findedCase?.data[0] ?? {}

//      const firstPhoto = photos?.[0] || ''

//      return {
//           title: title,
//           description: description,
//           openGraph: {
//                type: 'website',
//                locale: 'ru_RU',
//                url: `https://atomic-tech.ru/cases/${slug}`,
//                title: 'Atomic Tech - Твоя страница с кейсами',
//                siteName: 'Atomic Tech',
//                description: `Atomic Tech - Твоя страница с кейсам - ${title}-${description}`,
//                images: [
//                     {
//                          url: firstPhoto,
//                          type: 'image/svg+xml',
//                          width: 1200,
//                          height: 630,
//                     },
//                     {
//                          url: firstPhoto,
//                          type: 'image/png',
//                          width: 256,
//                          height: 256,
//                     },
//                ],
//           },
//           twitter: {
//                card: 'summary_large_image',
//                title: 'Atomic Tech - Твоя страница с кейсами',
//                description: `Atomic Tech - Твоя страница с кейсом - ${title}-${description}`,
//                site: '@atomictech',
//                images: [firstPhoto || ''],
//           },
//           icons: {
//                icon: [firstPhoto || '', '/icons/icon-192x192.png', '/icons/icon-512x512.png'],
//                apple: '/icons/apple-touch-icon.png',
//           },
//      }
// }

export default async function Case({ params }: Props) {
     const slug = await params.then((s) => s.slug)
     const findedCase = await getCaseItem(Number(slug))
     const relatedCaseItem = await getRelatedCaseItem(Number(slug))

     if (!findedCase || !relatedCaseItem) return redirect('/not-found')

     return <CaseGrid findedCase={findedCase?.data} relatedCase={relatedCaseItem} />
}
