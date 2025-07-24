import Reader from '@/components/article/organism'
import { getBlog } from '@/utils/api/blogs/blog'

type Props = {
    params: Promise<{
        articleId: string
    }>
}

export default async function Article({ params }: Props) {
    const { articleId } = await params
    const blog = await getBlog(articleId)
    if (!blog) return null
    return <Reader blog={blog} />
}
