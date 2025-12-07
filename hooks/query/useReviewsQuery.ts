import { Review } from '@/utils/shared/atomic-client/types'
import { useQuery } from '@tanstack/react-query'

import { useAtomicClient } from '../useAtomicClient'

export const useReviewsQuery = () => {
     const { atomicClient } = useAtomicClient()
     return useQuery<Review[]>({
          queryKey: ['review'],
          queryFn: async () => {
               if (!atomicClient) throw new Error('Atomic client is not uninitialized!')

               await atomicClient.ready

               return await atomicClient.reviews.list()
          },
          enabled: !!atomicClient,
          staleTime: 1000 * 60,
          retry: 3,
          refetchIntervalInBackground: true,
     })
}
