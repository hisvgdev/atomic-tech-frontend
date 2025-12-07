import { useEffect } from 'react'

export function useOutsideClick(refs: React.RefObject<HTMLElement>[], handler: () => void) {
     useEffect(() => {
          const listener = (event: MouseEvent | TouchEvent) => {
               const target = event.target as Node
               for (const ref of refs) {
                    if (ref.current && ref.current.contains(target)) {
                         return
                    }
               }
               handler()
          }

          window.addEventListener('mousedown', listener)
          window.addEventListener('touchstart', listener)

          return () => {
               window.removeEventListener('mousedown', listener)
               window.removeEventListener('touchstart', listener)
          }
     }, [refs, handler])
}
