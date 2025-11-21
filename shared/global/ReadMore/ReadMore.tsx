'use client'

import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

export const ReadMore = () => {
     const pathname = usePathname()

     useEffect(() => {
          const handleCopy = (event: ClipboardEvent) => {
               if (!event.clipboardData) return

               const selectedText = window.getSelection()?.toString() ?? ''
               const appendedText = `\n\nЧитайте больше на: https://atomic-tech.ru${pathname}`
               const newClipboardText = selectedText + appendedText

               event.preventDefault()
               event.clipboardData.setData('text/plain', newClipboardText)
          }

          document.addEventListener('copy', handleCopy)
          return () => {
               document.removeEventListener('copy', handleCopy)
          }
     }, [pathname])

     return null
}
