/**
 * Blocks Service
 */

import { ApiClient } from '@/utils/shared/atomic-client/client'
import { Block, BlockCreate, BlockFilters, BlockUpdate, UUID } from '@/utils/shared/atomic-client/types'

export class BlocksService {
     constructor(private client: ApiClient) {}

     /**
      * Get all blocks with optional filters
      */
     async list(filters?: BlockFilters): Promise<Block[]> {
          return this.client.get<Block[]>('/blocks', { params: filters })
     }

     /**
      * Create a new block
      */
     async create(data: BlockCreate): Promise<Block> {
          return this.client.post<Block, BlockCreate>('/blocks', data)
     }

     /**
      * Update a block
      */
     async update(id: UUID, data: BlockUpdate): Promise<Block> {
          return this.client.patch<Block, BlockUpdate>(`/blocks/${id}`, data)
     }

     /**
      * Get blocks by post ID
      */
     async getByPost(postId: UUID): Promise<Block[]> {
          return this.list({ 'filter[post_id]': postId })
     }
}
