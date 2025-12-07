/**
 * TypeScript types for Atomic API
 */

// Common types
export type UUID = string
export type Email = `${string}@${string}`;

export enum PostStatus {
     DRAFT = 'draft',
     PUBLISHED = 'published',
     ARCHIVED = 'archived',
}

export enum CustomFieldType {
     TEXT = 'text',
     NUMBER = 'number',
     BOOLEAN = 'boolean',
     DATE = 'date',
     JSON = 'json',
}

// Taxonomy Types
export interface TaxonomyType {
     id: UUID
     title: string
     slug: string
     description?: string
     created_at: string
     updated_at: string
}

export interface TaxonomyTypeCreate {
     title: string
     slug: string
     description?: string
}

// Taxonomies
export interface Taxonomy {
     id: UUID
     title: string
     slug: string
     type_id: UUID
     parent_id?: UUID
     description?: string
     path: string[]
     children_count: number
     created_at: string
     updated_at: string
}

export interface TaxonomyCreate {
     title: string
     slug: string
     type_id: UUID
     parent_id?: UUID
     description?: string
}

// Post Types
export interface PostType {
     id: UUID
     title: string
     slug: string
     description?: string
     created_at: string
     updated_at: string
}

export interface PostTypeCreate {
     title: string
     slug: string
     description?: string
}

// Cover Image
export interface CoverImage {
     url: string
     filename?: string
     content_type?: string
     size?: number
}

// Blocks
export interface Block {
     id: UUID
     post_id: UUID
     type: string
     order: number
     content: Record<string, any>
     created_at: string
     updated_at: string
}

export interface BlockCreate {
     post_id: UUID
     type: string
     order?: number
     content: Record<string, any>
}

export interface BlockUpdate {
     type?: string
     order?: number
     content?: Record<string, any>
}

// Posts
export interface Post {
     id: UUID
     title: string
     slug: string
     type_id?: UUID
     author_id?: UUID
     rating?: number
     status?: PostStatus
     published_at?: string
     created_at: string
     updated_at?: string
     covers: CoverImage[]
     excerpt?: string
     reading_time_min?: number
     view_count?: number
     custom_fields?: Partial<CustomFieldsProps>
     taxonomies?: TaxonomiesProps[]
     blocks?: Block[]
}

export interface TaxonomiesProps {
     id: UUID
     type_id: UUID
     children_count: number
     created_at: Date
     updated_at: string
     description?: string
     parent_id?: string
     path?: any[]
     slug: string
     title: string
     type: TypeTaxonomiesProps
}

export interface TypeTaxonomiesProps {
     title: string
     slug: string
     description: any
     id: string
     created_at: string
     updated_at: string
}

export interface CustomFieldsProps {
     shot_at_home: boolean
     result_name: string
     result_description: string
     link_to_case: string
     results: JSON
}

export interface PostCreate {
     title: string
     slug: string
     type_id: UUID
     author_id?: UUID
     status?: PostStatus
     excerpt?: string
     reading_time_min?: number
     custom_fields?: Record<string, any>
     taxonomies?: UUID[]
     blocks?: Array<Omit<BlockCreate, 'post_id'>>
}
export interface CreateLeadInput {
     phone: string;
     email: string;
     telegram_username?: string;
}
export interface LeadProps {
     phone: string;
     email: Email;
     telegram_username: string;
     name: string;
     message: string;
     id: UUID,
     status: string;
     created_at: Date;
     updated_at: Date;
}
export interface PostUpdate {
     title?: string
     slug?: string
     status?: PostStatus
     published_at?: string
     excerpt?: string
     reading_time_min?: number
     custom_fields?: Record<string, any>
}

// Users
export interface User {
     id: UUID
     keycloak_id: string
     username: string
     email: string
     first_name?: string
     last_name?: string
     avatar_url?: string
     is_active: boolean
     created_at: string
     updated_at: string
}

export interface UserCreate {
     keycloak_id: string
     username: string
     email: string
     first_name?: string
     last_name?: string
     avatar_url?: string
}

export interface UserUpdate {
     username?: string
     email?: string
     first_name?: string
     last_name?: string
     avatar_url?: string
     is_active?: boolean
}

// Reviews
export interface Review {
     id: UUID
     post_id: UUID
     user_id: UUID
     rating: number
     title?: string
     content?: string
     is_verified: boolean
     created_at: string
     updated_at: string
}

export interface ReviewWithUser extends Review {
     user: User
}

export interface ReviewCreate {
     name: string
     company: string
     rating: number
     review_text: string
     agreement_accepted: boolean
}

export interface ReviewUpdate {
     rating?: number
     title?: string
     content?: string
     is_verified?: boolean
}

// Custom Fields
export interface CustomField {
     id: UUID
     post_type_id: UUID
     name: string
     label: string
     field_type: CustomFieldType
     description?: string
     required: boolean
     default_value?: Record<string, any>
     validation_rules?: Record<string, any>
     order: number
     created_at: string
     updated_at: string
}

export interface CustomFieldCreate {
     post_type_id: UUID
     name: string
     label: string
     field_type: CustomFieldType
     description?: string
     required?: boolean
     default_value?: Record<string, any>
     validation_rules?: Record<string, any>
     order?: number
}

export interface CustomFieldUpdate {
     label?: string
     description?: string
     required?: boolean
     default_value?: Record<string, any>
     validation_rules?: Record<string, any>
     order?: number
}

// Query parameters
export interface PaginationParams {
     'page[size]'?: number
     'page[cursor]'?: string
}

export interface TaxonomyFilters {
     'filter[type]'?: string
     'filter[parent_id]'?: string
     'filter[q]'?: string
}

export interface PostFilters {
     'filter[status]'?: PostStatus
     'filter[type]'?: string
     'filter[q]'?: string
     // Custom field filters with operators
     [key: `filter[custom_field.${string}.eq]`]: string | number | boolean
     [key: `filter[custom_field.${string}.neq]`]: string | number | boolean
     [key: `filter[custom_field.${string}.gte]`]: number
     [key: `filter[custom_field.${string}.lte]`]: number
}

export interface BlockFilters {
     'filter[post_id]'?: UUID
}

export interface ReviewFilters {
     post_id?: UUID
     user_id?: UUID
}

// API Response types
export interface ApiError {
     detail: string
}

export interface HealthResponse {
     status: string
}
