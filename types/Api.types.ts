export interface BaseResponseApiProps {
  success: boolean;
  filters: any[];
  pagination: PaginationProps
}

export interface BaseQueryApiParamsProps {
  limit?: number;
  offset?: number;
  blog_category_id?: string;
  category_id?: string;
  subcategory_id?: string;
  technology_id?: string;
  usluga_id?: string;
  year?: string;
  rating?: string;
  title?: string;
  name?: string;
  sort_by?: string;
  search?: string;
  page?: string;
  sort_direction?: 'asc' | 'desc'
}

export interface BaseRequestApiProps {
  limit?: number;
  offset?: number;
  created_at?: string;
  sort_by?: string;
  sort_direction?: 'asc' | 'desc'
}

export interface PaginationProps {
  current_page: number;
  has_more: boolean;
  limit: number;
  offset: number;
  total: number;
  total_pages: number;
}