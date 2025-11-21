'use client'

import React, { FC, useEffect, useState } from 'react'

import { ReaderContentLeftProps } from './ReaderContentLeft.types'

export const ReaderContentLeft: FC<ReaderContentLeftProps> = (props) => {
     const { content } = props
     const [headings, setHeadings] = useState<string[]>([])

     useEffect(() => {
          if (!content) return

          const parser = new DOMParser()
          const doc = parser.parseFromString(content, 'text/html')
          const h2Elements = doc.querySelectorAll('h2')
          const extracted = Array.from(h2Elements).map((h2) => h2.textContent?.trim() || '')
          setHeadings(extracted)
     }, [content])

     return (
          <div className="flex w-fit flex-col gap-4">
               <h4 className="text-base font-semibold">Содержание:</h4>
               {headings.map((item, indx) => (
                    <span key={`${indx}-${item}`} className="font-normal text-[#737373] transition-all">
                         {item}
                    </span>
               ))}
          </div>
     )
}
