import React, { SVGProps } from 'react'

type MagnifierIconProps = SVGProps<SVGSVGElement> & {
     width?: number | string
     height?: number | string
     stroke?: string
     fill?: string
}

export const MagnifierIcon: React.FC<MagnifierIconProps> = ({
     width = 22,
     height = 22,
     stroke = '#1C274C',
     fill = 'none',
     className,
     ...props
}) => {
     return (
          <svg
               xmlns="http://www.w3.org/2000/svg"
               width={width}
               height={height}
               viewBox="0 0 22 22"
               fill={fill}
               className={className || ''}
               {...props}
          >
               <g opacity="0.6">
                    <ellipse cx="10.293" cy="10.5002" rx="8.3125" ry="8.3125" stroke={stroke} strokeWidth={1.5} />
                    <path d="M16.418 16.6252L19.4805 19.6877" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" />
               </g>
          </svg>
     )
}
