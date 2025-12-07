/**
 * Posts Service
 */

import { ApiClient } from '@/utils/shared/atomic-client/client'
import { Post, PostCreate, PostFilters, PostStatus, PostUpdate } from '@/utils/shared/atomic-client/types'

export class PostsService {
     constructor(private client: ApiClient) {}

     /**
      * Get all posts with optional filters
      */
     async list(filters?: PostFilters): Promise<Post[]> {
          return this.client.get<Post[]>('/posts', { params: filters })
     }

     /**
      * Get post by ID or slug
      */
     async get(idOrSlug: string): Promise<Post> {
          return this.client.get<Post>(`/posts/${idOrSlug}`)
     }

     /**
      * Create a new post
      */
     async create(data: PostCreate): Promise<Post> {
          return this.client.post<Post, PostCreate>('/posts', data)
     }

     /**
      * Update a post
      */
     async update(idOrSlug: string, data: PostUpdate): Promise<Post> {
          return this.client.patch<Post, PostUpdate>(`/posts/${idOrSlug}`, data)
     }

     /**
      * Get posts by status
      */
     async getByStatus(status: PostStatus): Promise<Post[]> {
          return this.list({ 'filter[status]': status })
     }

     /**
      * Get posts by type
      */
     async getByType(typeIdOrSlug: string): Promise<Post[]> {
          return this.list({ 'filter[type]': typeIdOrSlug })
     }

     /**
      * Search posts
      */
     async search(query: string): Promise<Post[]> {
          return this.list({ 'filter[q]': query })
     }

     /**
      * Publish a post
      */
     async publish(idOrSlug: string): Promise<Post> {
          return this.client.post<Post>(`/posts/${idOrSlug}/publish`)
     }

     /**
      * Archive a post
      */
     async archive(idOrSlug: string): Promise<Post> {
          return this.client.post<Post>(`/posts/${idOrSlug}/archive`)
     }

     /**
      * Increment post view count
      */
     async incrementViews(idOrSlug: string): Promise<Post> {
          return this.client.post<Post>(`/posts/${idOrSlug}/increment-views`)
     }

     /**
      * Upload cover image for post
      */
     async uploadCover(idOrSlug: string, file: File | Blob): Promise<{ url: string; message: string }> {
          const formData = new FormData()
          formData.append('file', file)

          return this.client.post(`/posts/${idOrSlug}/cover`, formData, {
               headers: {
                    'Content-Type': 'multipart/form-data',
               },
          })
     }

     /**
      * Delete cover image from post
      */
     async deleteCover(idOrSlug: string): Promise<void> {
          return this.client.delete(`/posts/${idOrSlug}/cover`)
     }

     /**
      * Filter posts by custom fields
      *
      * @example
      * // Filter by single field with equality
      * await posts.filterByCustomFields({ price: { eq: 100 } });
      *
      * // Filter by range
      * await posts.filterByCustomFields({
      *   price: { gte: 100, lte: 500 },
      *   featured: { eq: true }
      * });
      */
     async filterByCustomFields(
          filters: Record<
               string,
               {
                    eq?: string | number | boolean
                    neq?: string | number | boolean
                    gte?: number
                    lte?: number
               }
          >,
     ): Promise<Post[]> {
          const params: any = {}

          for (const [fieldName, operators] of Object.entries(filters)) {
               for (const [op, value] of Object.entries(operators)) {
                    if (value !== undefined) {
                         params[`filter[custom_field.${fieldName}.${op}]`] = value
                    }
               }
          }

          return this.list(params)
     }
}
