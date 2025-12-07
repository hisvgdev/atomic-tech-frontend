import React, { HTMLProps } from 'react'

import { RoutesEnum } from '@/types/Routes.types'

export interface GradientButtonProps {
     hasIsRoute?: boolean
     routePath?: RoutesEnum | string
     children?: React.ReactNode
     title?: string
     titleSize?: string
     iconSize?: number
     classNames?: HTMLProps<HTMLElement>['className']
     isWhite?: boolean
     secondClassnames?: HTMLProps<HTMLElement>['className']
     onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}
