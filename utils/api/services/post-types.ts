/**
 * Post Types Service
 */

import { ApiClient } from "@/utils/shared/atomic-client/client";
import { PostType, PostTypeCreate } from "@/utils/shared/atomic-client/types";

export class PostTypesService {
    constructor(private client: ApiClient) { }

    /**
     * Get all post types
     */
    async list(): Promise<PostType[]> {
        return this.client.get<PostType[]>('/post-types');
    }

    /**
     * Create a new post type
     */
    async create(data: PostTypeCreate): Promise<PostType> {
        return this.client.post<PostType, PostTypeCreate>('/post-types', data);
    }
}
