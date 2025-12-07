import { Post } from '@/utils/shared/atomic-client/types'
import { useQuery } from '@tanstack/react-query'

import { useAtomicClient } from '../useAtomicClient'

export const usePostsQuery = (queryKey: string, filterType: 'cases' | 'articles' | 'employee' = 'cases') => {
     const { atomicClient } = useAtomicClient()

     return useQuery<Post[]>({
          queryKey: [queryKey],
          queryFn: async () => {
               if (!atomicClient) throw new Error('AtomicClient not initialized')

               await atomicClient.ready

               return atomicClient.posts.list({
                    'filter[type]': filterType,
               })
          },
          enabled: !!atomicClient,
          staleTime: 1000 * 60,
          retry: 3,
          refetchIntervalInBackground: true,
     })
}
