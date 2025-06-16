import Reader from '@/components/article/organism'

interface ArticleProps {
    params: {
        articleId: string
    }
}

export default async function Article({ params }: ArticleProps) {
    const { articleId } = await params
    console.log(articleId)
    return <Reader />
}
