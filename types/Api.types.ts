export interface BaseResponseApiProps {
  success: boolean;
  filters: any[];
}

export interface BaseQueryApiParamsProps {
  filter?: FilterProps
  page?: PageProps
}
export interface FilterProps {
  status?: "draft" | 'published' | 'archived'
  type?: string;
  q?: string;
  parent_id?: string;
  post_id?: string;
}

export interface PageProps {
  size?: number;
  cursor?: string;
}