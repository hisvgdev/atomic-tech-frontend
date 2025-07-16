import Reader from '@/components/article/organism'

interface ArticlePageProps {
    params: {
        articleId: string
    }
}

export default function Article({ params }: ArticlePageProps) {
    const { articleId } = params
    console.log(articleId)
    return <Reader />
}
