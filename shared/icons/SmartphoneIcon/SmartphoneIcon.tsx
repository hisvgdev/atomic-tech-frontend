import React, { SVGProps } from 'react'

type SmartphoneIconProps = SVGProps<SVGSVGElement> & {
     width?: number | string
     height?: number | string
     stroke?: string
     fill?: string
}

export const SmartphoneIcon: React.FC<SmartphoneIconProps> = ({
     width = 111,
     height = 112,
     stroke = 'white',
     fill = 'none',
     className,
     ...props
}) => {
     return (
          <svg
               xmlns="http://www.w3.org/2000/svg"
               width={width}
               height={height}
               viewBox="0 0 111 112"
               fill={fill}
               className={className}
               {...props}
          >
               <path
                    d="M18.7939 46.5587C18.7939 29.1504 18.7939 20.4463 24.1637 15.0382C29.5334 9.63013 38.1758 9.63013 55.4606 9.63013C72.7454 9.63013 81.3879 9.63013 86.7576 15.0382C92.1273 20.4463 92.1273 29.1504 92.1273 46.5587V65.023C92.1273 82.4313 92.1273 91.1354 86.7576 96.5435C81.3879 101.952 72.7454 101.952 55.4606 101.952C38.1758 101.952 29.5334 101.952 24.1637 96.5435C18.7939 91.1354 18.7939 82.4313 18.7939 65.023V46.5587Z"
                    stroke={stroke}
                    strokeWidth={1.5}
               />
               <path d="M69.2109 88.1033H41.7109" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" />
          </svg>
     )
}
