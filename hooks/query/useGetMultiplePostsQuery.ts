import { Post } from '@/utils/shared/atomic-client/types'
import { useQueries, useQuery } from '@tanstack/react-query'

import { useAtomicClient } from '../useAtomicClient'

export const useGetMultiplePostsQuery = ({
  type = 'cases',
  slugs,
}: {
  type?: 'cases' | 'articles' | 'employee'
  slugs: string[]
}) => {
  const { atomicClient } = useAtomicClient()

  const queries = useQueries({
    queries: slugs.map((slug) => ({
      queryKey: ['post_slug', type, slug],
      enabled: !!atomicClient && !!slug,
      queryFn: async () => {
        if (!atomicClient) throw new Error('AtomicClient not initialized')
        await atomicClient.ready

        return atomicClient.posts.get(slug)
      },
    })),
  })

  const isLoading = queries.some((q) => q.isLoading)
  const isError = queries.some((q) => q.isError)

  const data = queries
    .map((q) => q.data)
    .filter(Boolean) as Post[]

  return {
    data,
    isLoading,
    isError,
  }
}
