/**
 * Taxonomies Service
 */

import { ApiClient } from '@/utils/shared/atomic-client/client'
import { Taxonomy, TaxonomyCreate, TaxonomyFilters, UUID } from '@/utils/shared/atomic-client/types'

export class TaxonomiesService {
     constructor(private client: ApiClient) {}

     /**
      * Get all taxonomies with optional filters
      */
     async list(filters?: TaxonomyFilters): Promise<Taxonomy[]> {
          return this.client.get<Taxonomy[]>('/taxonomies', { params: filters })
     }

     /**
      * Get taxonomy by ID or slug
      */
     async get(idOrSlug: string): Promise<Taxonomy> {
          return this.client.get<Taxonomy>(`/taxonomies/${idOrSlug}`)
     }

     /**
      * Create a new taxonomy
      */
     async create(data: TaxonomyCreate): Promise<Taxonomy> {
          return this.client.post<Taxonomy, TaxonomyCreate>('/taxonomies', data)
     }

     /**
      * Get taxonomies by type
      */
     async getByType(typeIdOrSlug: string): Promise<Taxonomy[]> {
          return this.list({ 'filter[type]': typeIdOrSlug })
     }

     /**
      * Get taxonomies by parent
      */
     async getByParent(parentId: UUID | null): Promise<Taxonomy[]> {
          return this.list({ 'filter[parent_id]': parentId || 'null' })
     }

     /**
      * Search taxonomies
      */
     async search(query: string): Promise<Taxonomy[]> {
          return this.list({ 'filter[q]': query })
     }
}
