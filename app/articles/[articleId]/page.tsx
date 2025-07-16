import Reader from '@/components/article/organism'

type Props = {
    params: Promise<{
        articleId: string
    }>
}

export default async function Article({ params }: Props) {
    const { articleId } = await params
    return <Reader />
}
