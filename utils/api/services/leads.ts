/**
 * Custom Fields Service
 */

import { ApiClient } from '@/utils/shared/atomic-client/client'
import { CreateLeadInput, LeadProps } from '@/utils/shared/atomic-client/types'

export class LeadsService {
  constructor(private client: ApiClient) { }

  /**
   * Create a new custom field
   */
  async create(data: CreateLeadInput): Promise<LeadProps> {
    return this.client.post<LeadProps, CreateLeadInput>('/leads', data)
  }
}