export interface BaseResponseApiProps {
  success: boolean;
  filters: any[];
  pagination: PaginationProps
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