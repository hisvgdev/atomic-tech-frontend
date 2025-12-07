import {
     BlocksService,
     CustomFieldsService,
     PostsService,
     PostTypesService,
     ReviewsService,
     TaxonomiesService,
     TaxonomyTypesService,
     UsersService,
} from '@/utils/api/services'

import { ApiClient, ApiClientConfig } from './client'
import { HealthResponse } from './types'

export interface AtomicClientConfig {
     baseURL: string
     apiPrefix?: string
     timeout?: number
     authToken?: string
}

export class AtomicClient {
     private apiClient: ApiClient
     public ready: Promise<void>
     private resolveReady!: () => void

     public readonly taxonomyTypes: TaxonomyTypesService
     public readonly taxonomies: TaxonomiesService
     public readonly postTypes: PostTypesService
     public readonly posts: PostsService
     public readonly blocks: BlocksService
     public readonly users: UsersService
     public readonly reviews: ReviewsService
     public readonly customFields: CustomFieldsService

     constructor(config: AtomicClientConfig) {
          const clientConfig: ApiClientConfig = {
               baseURL: config.baseURL,
               apiPrefix: config.apiPrefix,
               timeout: config.timeout,
          }

          this.apiClient = new ApiClient(clientConfig)

          this.ready = new Promise((resolve) => {
               this.resolveReady = resolve
          })

          this.fetchProxyToken()
               .then((token) => {
                    this.setAuthToken(token)
                    this.resolveReady()
               })
               .catch((e) => {
                    console.error('Failed to get service token via proxy:', e)
                    this.resolveReady()
               })

          this.taxonomyTypes = new TaxonomyTypesService(this.apiClient)
          this.taxonomies = new TaxonomiesService(this.apiClient)
          this.postTypes = new PostTypesService(this.apiClient)
          this.posts = new PostsService(this.apiClient)
          this.blocks = new BlocksService(this.apiClient)
          this.users = new UsersService(this.apiClient)
          this.reviews = new ReviewsService(this.apiClient)
          this.customFields = new CustomFieldsService(this.apiClient)
     }

     private async fetchProxyToken(): Promise<string> {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/service-token`)
          const token = await response.json()

          if (!token) {
               throw new Error('Invalid token format from proxy')
          }

          return token
     }

     setAuthToken(token: string): void {
          this.apiClient.setAuthToken(token)
     }

     removeAuthToken(): void {
          this.apiClient.removeAuthToken()
     }

     async health(): Promise<HealthResponse> {
          await this.ready
          return this.apiClient.get<HealthResponse>('/health')
     }

     getBaseURL(): string {
          return this.apiClient.getBaseURL()
     }
}
