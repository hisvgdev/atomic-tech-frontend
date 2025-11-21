import { TaxonomyType } from "@/utils/shared/atomic-client/types"
import { useQuery } from "@tanstack/react-query"
import { useAtomicClient } from "../useAtomicClient"

export const useTaxonomyTypesQuery = () => {
  const { atomicClient } = useAtomicClient();
  return useQuery<TaxonomyType[]>({
    queryKey: ['taxonomy-types'],
    queryFn: async () => {
      if (!atomicClient) throw new Error("Atomic client is not uninitialized!")

      await atomicClient.ready;

      return await atomicClient.taxonomyTypes.list();
    },
    enabled: !!atomicClient,
    staleTime: 1000 * 60,
    retry: 3,
    refetchIntervalInBackground: true
  })
}