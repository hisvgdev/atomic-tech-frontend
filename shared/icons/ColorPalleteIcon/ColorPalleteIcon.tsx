import React, { SVGProps } from 'react'

type ColorPalleteIconProps = SVGProps<SVGSVGElement> & {
     width?: number | string
     height?: number | string
     stroke?: string
     fill?: string
}

export const ColorPalleteIcon: React.FC<ColorPalleteIconProps> = ({
     width = 23,
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
               viewBox="0 0 23 22"
               fill={fill}
               className={className}
               {...props}
          >
               <g opacity="0.6">
                    <path
                         d="M2.06384 10.9606C2.06384 15.4635 5.60871 19.1741 10.1734 19.6757C10.847 19.7498 11.4998 19.4757 11.9793 19.0169C12.5783 18.4436 12.5783 17.5141 11.9793 16.9409C11.4998 16.4821 11.109 15.7976 11.4706 15.2487C12.9158 13.0546 20.3972 18.0935 20.3972 10.9606C20.3972 6.11548 16.2931 2.18774 11.2305 2.18774C6.1679 2.18774 2.06384 6.11548 2.06384 10.9606Z"
                         stroke={stroke}
                         strokeWidth={1.5}
                    />
                    <ellipse cx="16.2721" cy="10.5002" rx="1.375" ry="1.3125" stroke={stroke} strokeWidth={1.5} />
                    <ellipse cx="6.18884" cy="10.5002" rx="1.375" ry="1.3125" stroke={stroke} strokeWidth={1.5} />
                    <path
                         d="M10.3916 6.5625C10.3916 7.28737 9.77599 7.875 9.0166 7.875C8.25721 7.875 7.6416 7.28737 7.6416 6.5625C7.6416 5.83763 8.25721 5.25 9.0166 5.25C9.77599 5.25 10.3916 5.83763 10.3916 6.5625Z"
                         stroke={stroke}
                         strokeWidth={1.5}
                    />
                    <path
                         d="M14.8971 6.56274C14.8971 7.28762 14.2815 7.87524 13.5221 7.87524C12.7627 7.87524 12.1471 7.28762 12.1471 6.56274C12.1471 5.83787 12.7627 5.25024 13.5221 5.25024C14.2815 5.25024 14.8971 5.83787 14.8971 6.56274Z"
                         stroke={stroke}
                         strokeWidth={1.5}
                    />
               </g>
          </svg>
     )
}
