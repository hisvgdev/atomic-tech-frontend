export interface ArticlesFiltersProps {
     setSortByRating: (value: 'asc' | 'desc') => void
     setSortWithDate: (value: 'created_at' | 'updated_at') => void
     setSortByViews: (value: 'min_views' | 'max_views') => void
}
