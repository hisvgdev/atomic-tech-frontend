import { Taxonomy } from '@/utils/shared/atomic-client/types'
import { useQuery } from '@tanstack/react-query'

import { useAtomicClient } from '../useAtomicClient'

export const useTaxonomies = () => {
     const { atomicClient } = useAtomicClient()

     return useQuery<Taxonomy[]>({
          queryKey: ['taxonimies'],
          queryFn: async () => {
               if (!atomicClient) throw new Error('AtomicClient not initialized')

               await atomicClient.ready

               return atomicClient.taxonomies.list()
          },
          enabled: !!atomicClient,
          staleTime: 1000 * 60,
          retry: 3,
          refetchIntervalInBackground: true,
     })
}
