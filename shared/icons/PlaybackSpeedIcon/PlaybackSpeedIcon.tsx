import React, { SVGProps } from 'react'

type PlaybackSpeedIconProps = SVGProps<SVGSVGElement> & {
     width?: number | string
     height?: number | string
     stroke?: string
}

export const PlaybackSpeedIcon: React.FC<PlaybackSpeedIconProps> = ({
     width = 111,
     height = 112,
     stroke = 'white',
     className,
     ...props
}) => {
     return (
          <svg
               xmlns="http://www.w3.org/2000/svg"
               width={width}
               height={height}
               viewBox="0 0 111 112"
               fill="none"
               className={className}
               {...props}
          >
               <path
                    d="M55.4609 102.6C80.774 102.6 101.294 81.787 101.294 56.1124C101.294 30.4377 80.774 9.62427 55.4609 9.62427"
                    stroke={stroke}
                    strokeWidth={1.5}
                    strokeLinecap="round"
               />
               <path
                    d="M55.4613 102.601C30.1482 102.601 9.62793 81.7871 9.62793 56.1125C9.62793 30.4378 30.1482 9.62439 55.4613 9.62439"
                    stroke={stroke}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeDasharray="4 3"
               />
               <path
                    d="M71.107 51.1894C74.69 53.3351 74.69 58.8896 71.107 61.0353L49.4728 73.9908C45.9904 76.0761 41.7109 73.3619 41.7109 69.0678L41.7109 43.1568C41.7109 38.8628 45.9904 36.1485 49.4728 38.2339L71.107 51.1894Z"
                    stroke={stroke}
                    strokeWidth={1.5}
               />
          </svg>
     )
}
