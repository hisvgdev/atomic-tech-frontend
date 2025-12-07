import { AtomicClient } from '@/utils/shared/atomic-client/atomic-client'
import { useEffect, useState } from 'react'

export const useAtomicClient = () => {
     const [atomicClient, setAtomicClient] = useState<AtomicClient | null>(null)

     useEffect(() => {
          const client = new AtomicClient({
               baseURL: process.env.NEXT_PUBLIC_API_BASE_URL!,
          })
          setAtomicClient(client)
     }, [])

     return {
          atomicClient,
     }
}
