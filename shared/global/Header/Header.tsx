'use client'

import { useIsMobile } from '@/hooks/useMediaQuery'
import logo from '@/public/assets/images/logo.svg'
import { MotionButton } from '@/shared/custom/motion/MotionButton'
import { XIcon } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

import { NAV_MENU_LINKS } from './Header.constant'
import { MobileHeaderItems } from './MobileHeaderItems/MobileHeaderItems'

export const Header = () => {
     const [isOnDark, setIsOnDark] = useState(false)
     const [menuClick, setMenuClick] = useState(false)
     const [showMenuContent, setShowMenuContent] = useState(false)
     const [isHover, setIsHover] = useState(false)
     const pathname = usePathname()
     const triggerRef = useRef<HTMLDivElement | null>(null)
     const isMobile = useIsMobile()

     const handleMenuClick = () => {
          if (menuClick) {
               setMenuClick(false)
          } else {
               setMenuClick(true)
               setTimeout(() => setShowMenuContent(true), 300)
          }
     }

     const handleBottomScroll = () => {
          window.scrollTo({
               top: 10000,
               left: 0,
               behavior: 'smooth',
          })
          setMenuClick(false)
     }

     useEffect(() => {
          if (typeof window === 'undefined' || typeof document === 'undefined') return

          const sensitivity = 0.1

          const handleScroll = () => {
               const sections = document.querySelectorAll('section[data-dark]')
               const triggerPoint = window.innerHeight * sensitivity

               let foundDark = false

               for (const section of sections) {
                    const rect = section.getBoundingClientRect()
                    if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
                         const isDark = section.getAttribute('data-dark') === 'true'
                         setIsOnDark(isDark)
                         foundDark = true
                         break
                    }
               }

               if (!foundDark) {
                    setIsOnDark(false)
               }
          }

          window.addEventListener('scroll', handleScroll)
          handleScroll()

          return () => window.removeEventListener('scroll', handleScroll)
     }, [pathname])

     useEffect(() => {
          setIsOnDark(false)
          setMenuClick(false)
     }, [pathname])

     return (
          <>
               <div ref={triggerRef} className="absolute top-0 h-8 w-full" />

               <div className="fixed top-0 z-50 flex w-full items-center justify-center pt-5 pb-10 lg:pb-0">
                    <motion.div
                         className={cn(
                              'min-w-96 rounded-full p-3.5 backdrop-blur-lg',
                              isOnDark ? 'bg-white/10' : 'bg-[#0B0B0B0D]',
                         )}
                         animate={{
                              width: menuClick ? '90%' : '24rem',
                         }}
                         initial={{
                              width: '24rem',
                         }}
                         transition={{
                              duration: 0.5,
                              ease: 'easeInOut',
                         }}
                    >
                         <div className="flex items-center justify-between">
                              <Link href="/">
                                   <Image
                                        src={logo}
                                        alt="logo"
                                        className={cn(
                                             'h-auto w-32 transition-all duration-500',
                                             isOnDark ? 'brightness-200' : 'brightness-0',
                                        )}
                                   />
                              </Link>

                              <AnimatePresence>
                                   {menuClick && showMenuContent && (
                                        <motion.nav
                                             key="menu-content"
                                             className="hidden max-w-3xl overflow-hidden lg:block"
                                             initial={{ opacity: 0, scale: 0.95, width: 0 }}
                                             animate={{ opacity: 1, scale: 1, width: '100%' }}
                                             exit={{ opacity: 0, scale: 0.9, width: 0 }}
                                             transition={{ duration: 0.4, ease: 'easeInOut' }}
                                             onAnimationComplete={(definition) => {
                                                  if (definition === 'exit') {
                                                       setShowMenuContent(false)
                                                  }
                                             }}
                                        >
                                             <ul className="relative flex justify-between px-4">
                                                  <AnimatePresence>
                                                       {NAV_MENU_LINKS.map((link, idx) => {
                                                            const activeLink = link.href === pathname

                                                            return (
                                                                 <li
                                                                      key={`${idx}-${link.id}`}
                                                                      className="relative px-4 py-2"
                                                                 >
                                                                      {activeLink && (
                                                                           <motion.div
                                                                                layoutId="nav-active"
                                                                                className={cn(
                                                                                     'absolute inset-0 z-0 rounded-full',
                                                                                     isOnDark ? 'bg-white' : 'bg-black',
                                                                                )}
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
                                                                                     'relative z-10 rounded-full px-4 py-2 font-bold transition-colors duration-300 hover:text-white',
                                                                                     {
                                                                                          'text-white':
                                                                                               (activeLink &&
                                                                                                    !isOnDark) ||
                                                                                               (!activeLink &&
                                                                                                    isOnDark),
                                                                                          'text-black':
                                                                                               (activeLink &&
                                                                                                    isOnDark) ||
                                                                                               (!activeLink &&
                                                                                                    !isOnDark),
                                                                                     },
                                                                                )}
                                                                           >
                                                                                {link.title}
                                                                           </Link>
                                                                      ) : (
                                                                           <button
                                                                                type="button"
                                                                                onClick={handleBottomScroll}
                                                                                className={cn(
                                                                                     'relative z-10 cursor-pointer rounded-full font-bold transition-colors duration-300 hover:text-white',
                                                                                     {
                                                                                          'text-white':
                                                                                               (activeLink &&
                                                                                                    !isOnDark) ||
                                                                                               (!activeLink &&
                                                                                                    isOnDark),
                                                                                          'text-black':
                                                                                               (activeLink &&
                                                                                                    isOnDark) ||
                                                                                               (!activeLink &&
                                                                                                    !isOnDark),
                                                                                     },
                                                                                )}
                                                                           >
                                                                                {link.title}
                                                                           </button>
                                                                      )}
                                                                 </li>
                                                            )
                                                       })}
                                                  </AnimatePresence>
                                             </ul>
                                        </motion.nav>
                                   )}
                              </AnimatePresence>

                              <MotionButton
                                   className="relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full"
                                   animate={{
                                        width: menuClick ? '3.5rem' : 'auto',
                                   }}
                                   style={{
                                        height: !menuClick ? '2.5rem' : '',
                                        padding: menuClick ? '1.75rem 0' : '',
                                        background:
                                             'linear-gradient(2.61deg, #9FE4F3 -265.88%, #3FBFD9 -199.4%, #157CAB -132.93%, #114B71 -66.45%, #051824 0.03%)',
                                   }}
                                   transition={{
                                        width: { duration: 0.15, ease: 'easeInOut' },
                                        padding: { duration: 0.2, ease: 'easeInOut' },
                                   }}
                                   onMouseEnter={() => setIsHover(true)}
                                   onMouseLeave={() => setIsHover(false)}
                                   onClick={handleMenuClick}
                                   initial="initial"
                              >
                                   <motion.div
                                        animate={{
                                             scaleY: isHover ? 1.5 : 0,
                                             opacity: isHover ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                                        className="pointer-events-none absolute inset-0 z-10"
                                        style={{
                                             transformOrigin: 'bottom',
                                             background:
                                                  'linear-gradient(360deg, #9FF3F3 9.76%, #3FD9D1 40.24%, #159AAB 70.73%, #116971 101.22%, #000E0F 131.71%)',
                                        }}
                                   />

                                   {menuClick ? (
                                        <motion.div
                                             key="close"
                                             initial={{ opacity: 0, scale: 0.5 }}
                                             animate={{ opacity: 1, scale: 1 }}
                                             exit={{ opacity: 0, scale: 0.5 }}
                                             transition={{ duration: 0.2 }}
                                             className="z-20"
                                        >
                                             <XIcon size={24} color="#C4C4C4" weight="bold" />
                                        </motion.div>
                                   ) : (
                                        <motion.div
                                             key="menu"
                                             className="z-20 flex items-center gap-3 px-4 text-white"
                                             initial={{ opacity: 0, x: -10 }}
                                             animate={{ opacity: 1, x: 0 }}
                                             exit={{ opacity: 0, x: -10 }}
                                             transition={{ duration: 0.2 }}
                                        >
                                             <span className="text-base font-bold -tracking-[0.015rem]">Меню</span>
                                             <div className="flex h-full flex-col justify-center gap-1">
                                                  <div className="h-0.5 w-7 bg-white/50" />
                                                  <div className="h-0.5 w-7 bg-white/50" />
                                             </div>
                                        </motion.div>
                                   )}
                              </MotionButton>
                         </div>
                    </motion.div>
               </div>
               {isMobile && menuClick && <MobileHeaderItems setMenuClick={setMenuClick} isOnDark={isOnDark} />}
          </>
     )
}
