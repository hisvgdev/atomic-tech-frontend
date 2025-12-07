/**
 * Custom Fields Service
 */

import { ApiClient } from '@/utils/shared/atomic-client/client'
import { CustomField, CustomFieldCreate, CustomFieldUpdate, UUID } from '@/utils/shared/atomic-client/types'

export class CustomFieldsService {
     constructor(private client: ApiClient) {}

     /**
      * Get custom fields for a post type
      */
     async getByPostType(postTypeId: UUID): Promise<CustomField[]> {
          return this.client.get<CustomField[]>('/custom-fields', {
               params: { post_type_id: postTypeId },
          })
     }

     /**
      * Get custom field by ID
      */
     async get(fieldId: UUID): Promise<CustomField> {
          return this.client.get<CustomField>(`/custom-fields/${fieldId}`)
     }

     /**
      * Create a new custom field
      */
     async create(data: CustomFieldCreate): Promise<CustomField> {
          return this.client.post<CustomField, CustomFieldCreate>('/custom-fields', data)
     }

     /**
      * Update a custom field
      */
     async update(fieldId: UUID, data: CustomFieldUpdate): Promise<CustomField> {
          return this.client.patch<CustomField, CustomFieldUpdate>(`/custom-fields/${fieldId}`, data)
     }

     /**
      * Delete a custom field
      */
     async delete(fieldId: UUID): Promise<void> {
          return this.client.delete(`/custom-fields/${fieldId}`)
     }
}
