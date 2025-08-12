import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { cn } from '@/lib/utils'

import { NAV_MENU_LINKS } from '../Header.constant'

export const MobileHeaderItems = ({
     isOnDark,
     setMenuClick,
}: {
     isOnDark: boolean
     setMenuClick: Dispatch<SetStateAction<boolean>>
}) => {
     const pathname = usePathname()

     const handleBottomScroll = () => {
          window.scrollTo({
               top: 10000,
               left: 0,
               behavior: 'smooth',
          })
          setMenuClick(false)
     }

     useEffect(() => {
          document.body.style.overflow = 'hidden'

          return () => {
               document.body.style.overflow = ''
          }
     }, [])

     return createPortal(
          <motion.div
               initial={{ y: -100, opacity: 0 }}
               animate={{ y: 0, opacity: 100 }}
               className="fixed inset-0 z-30 h-dvh w-full backdrop-blur-xl"
          >
               <div className="flex h-full flex-col items-center justify-center gap-4">
                    {NAV_MENU_LINKS.map((link, idx) => {
                         const activeLink = link.href === pathname

                         return (
                              <li key={`${idx}-${link.id}`} className="relative list-none px-4 py-2">
                                   {activeLink && (
                                        <motion.div
                                             layoutId="nav-active"
                                             transition={{
                                                  type: 'spring',
                                                  stiffness: 450,
                                                  damping: 30,
                                             }}
                                        />
                                   )}
                                   {link.href ? (
                                        <Link
                                             href={link.href}
                                             className={cn(
                                                  'relative z-10 rounded-full px-8 py-2 text-2xl font-bold transition-colors duration-300',
                                                  activeLink
                                                       ? isOnDark
                                                            ? 'bg-white text-black'
                                                            : 'bg-black text-white'
                                                       : isOnDark
                                                         ? 'text-white'
                                                         : 'text-black',
                                             )}
                                        >
                                             {link.title}
                                        </Link>
                                   ) : (
                                        <button
                                             type="button"
                                             onClick={handleBottomScroll}
                                             className={cn(
                                                  'relative z-10 rounded-full px-4 py-2 text-2xl font-bold transition-colors duration-300',
                                                  activeLink
                                                       ? isOnDark
                                                            ? 'bg-black text-white'
                                                            : 'bg-white text-black'
                                                       : isOnDark
                                                         ? 'text-white'
                                                         : 'text-black',
                                             )}
                                        >
                                             {link.title}
                                        </button>
                                   )}
                              </li>
                         )
                    })}
               </div>
          </motion.div>,
          document.body,
     )
}
