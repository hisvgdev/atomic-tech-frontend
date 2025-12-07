import { TaxonomiesProps } from '@/utils/shared/atomic-client/types'

export interface FilterGroupProps {
     title: string
     items: TaxonomiesProps[]
     type: 'usluga' | 'category'
}
