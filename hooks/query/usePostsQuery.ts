import { Post } from '@/utils/shared/atomic-client/types'
import { useQuery } from '@tanstack/react-query'

import { useAtomicClient } from '../useAtomicClient'

export const usePostsQuery = ({
     page = 1,
     limit = 6,
     type = 'cases',
     filters = {},
}: {
     page?: number
     limit?: number
     type?: 'cases' | 'articles' | 'employee'
     filters?: Record<string, string | number>
}) => {
     const { atomicClient } = useAtomicClient()

     return useQuery<Post[]>({
          queryKey: ['posts', type, page, limit, filters],
          queryFn: async () => {
               if (!atomicClient) throw new Error('AtomicClient not initialized')
               await atomicClient.ready

               return atomicClient.posts.list({
                    'filter[type]': type,

                    ...Object.fromEntries(
                         Object.entries(filters).map(([k, v]) => [
                              `filter${k}`, v
                         ])
                    ),
               })
          },
          enabled: !!atomicClient,
          staleTime: 60_000,
     })
}
