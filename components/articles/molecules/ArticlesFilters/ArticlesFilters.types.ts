export interface ArticlesFiltersProps {
  setSortByRating: (value: 'asc' | 'desc') => void;
  setSortWithDate: (value: 'created_at' | 'updated_at') => void;
}