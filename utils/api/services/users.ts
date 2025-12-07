/**
 * Users Service
 */

import { ApiClient } from '@/utils/shared/atomic-client/client'
import { User, UserUpdate, UUID } from '@/utils/shared/atomic-client/types'

export class UsersService {
     constructor(private client: ApiClient) {}

     /**
      * Get all users
      */
     async list(skip = 0, limit = 100): Promise<User[]> {
          return this.client.get<User[]>('/users', { params: { skip, limit } })
     }

     /**
      * Get user by ID
      */
     async get(userId: UUID): Promise<User> {
          return this.client.get<User>(`/users/${userId}`)
     }

     /**
      * Sync user from Keycloak
      */
     async syncFromKeycloak(keycloakId: string): Promise<User> {
          return this.client.post<User>(`/users/sync/${keycloakId}`)
     }

     /**
      * Update user
      */
     async update(userId: UUID, data: UserUpdate): Promise<User> {
          return this.client.patch<User, UserUpdate>(`/users/${userId}`, data)
     }
}
