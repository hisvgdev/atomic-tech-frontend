import Reader from '@/components/article/organism'

interface ArticlePageProps {
    params: Promise<{
        articleId: string
    }>
}

export default async function Article({ params }: ArticlePageProps) {
    const { articleId } = await params
    console.log(articleId)
    return <Reader />
}
