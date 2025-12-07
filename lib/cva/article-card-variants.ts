import { cva } from 'class-variance-authority'

export const articleCardVariants = cva(
     'w-full bg-transparent shadow-none flex flex-col overflow-hidden transition-all',
     {
          variants: {
               withTag: {
                    true: '',
                    false: '',
               },
          },
          defaultVariants: {
               withTag: false,
          },
     },
)
