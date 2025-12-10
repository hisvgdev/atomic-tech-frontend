import { Post } from '@/utils/shared/atomic-client/types'
import { useQuery } from '@tanstack/react-query'

import { useAtomicClient } from '../useAtomicClient'

export const usePostsQuery = ({
     page = 1,
     limit = 6,
     type = 'cases',
     filters = {},
     sort_dir = 'asc'
}: {
     page?: number
     limit?: number
     type?: 'cases' | 'articles' | 'employee'
     filters?: Record<string, string | number>
     sort_dir?: 'asc' | 'desc'
}) => {
     const { atomicClient } = useAtomicClient()

     return useQuery<Post[]>({
          queryKey: ['posts', type, page, limit, filters, sort_dir],
          enabled: !!atomicClient,
          staleTime: 0,

          queryFn: async () => {
               if (!atomicClient) throw new Error('AtomicClient not initialized')

               await atomicClient.ready

               const formattedFilters = Object.fromEntries(
                    Object.entries(filters).map(([k, v]) => [
                         `filter[${k}]`,
                         v,
                    ])
               )

               return atomicClient.posts.list({
                    'filter[type]': type,
                    'sort_dir': sort_dir,
                    ...formattedFilters,
               })
          },
     })
}
