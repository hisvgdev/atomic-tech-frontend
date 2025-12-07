/**
 * Taxonomy Types Service
 */

import { ApiClient } from '@/utils/shared/atomic-client/client'
import { PaginationParams, TaxonomyType, TaxonomyTypeCreate } from '@/utils/shared/atomic-client/types'

export class TaxonomyTypesService {
     constructor(private client: ApiClient) {}

     /**
      * Get all taxonomy types
      */
     async list(params?: PaginationParams): Promise<TaxonomyType[]> {
          return this.client.get<TaxonomyType[]>('/taxonomy-types', { params })
     }

     /**
      * Get taxonomy type by ID or slug
      */
     async get(idOrSlug: string): Promise<TaxonomyType> {
          return this.client.get<TaxonomyType>(`/taxonomy-types/${idOrSlug}`)
     }

     /**
      * Create a new taxonomy type
      */
     async create(data: TaxonomyTypeCreate): Promise<TaxonomyType> {
          return this.client.post<TaxonomyType, TaxonomyTypeCreate>('/taxonomy-types', data)
     }
}
