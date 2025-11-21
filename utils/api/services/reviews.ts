/**
 * Reviews Service
 */

import { ApiClient } from "@/utils/shared/atomic-client/client";
import { Review, ReviewCreate, ReviewFilters, ReviewUpdate, ReviewWithUser, UUID } from "@/utils/shared/atomic-client/types";


export class ReviewsService {
    constructor(private client: ApiClient) { }

    /**
     * Get all reviews with optional filters
     */
    async list(filters?: ReviewFilters, skip = 0, limit = 100): Promise<ReviewWithUser[]> {
        return this.client.get<ReviewWithUser[]>('/reviews', {
            params: { ...filters, skip, limit },
        });
    }

    /**
     * Get review by ID
     */
    async get(reviewId: UUID): Promise<ReviewWithUser> {
        return this.client.get<ReviewWithUser>(`/reviews/${reviewId}`);
    }

    /**
     * Get reviews for a post
     */
    async getByPost(postId: UUID, skip = 0, limit = 100): Promise<ReviewWithUser[]> {
        return this.list({ post_id: postId }, skip, limit);
    }

    /**
     * Get reviews by a user
     */
    async getByUser(userId: UUID, skip = 0, limit = 100): Promise<ReviewWithUser[]> {
        return this.list({ user_id: userId }, skip, limit);
    }

    /**
     * Create a new review
     */
    async create(data: ReviewCreate): Promise<Review> {
        return this.client.post<Review, ReviewCreate>('/reviews', data);
    }

    /**
     * Update a review
     */
    async update(reviewId: UUID, data: ReviewUpdate): Promise<Review> {
        return this.client.patch<Review, ReviewUpdate>(`/reviews/${reviewId}`, data);
    }

    /**
     * Delete a review
     */
    async delete(reviewId: UUID): Promise<void> {
        return this.client.delete(`/reviews/${reviewId}`);
    }
}
