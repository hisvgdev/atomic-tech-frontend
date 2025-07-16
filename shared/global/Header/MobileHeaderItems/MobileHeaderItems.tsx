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
            className="fixed backdrop-blur-xl z-30 inset-0 h-dvh w-full"
        >
            <div className="h-full flex flex-col gap-4 items-center justify-center">
                {NAV_MENU_LINKS.map((link, idx) => {
                    const activeLink = link.href === pathname

                    return (
                        <li key={`${idx}-${link.id}`} className="relative list-none px-4 py-2">
                            {activeLink && (
                                <motion.div
                                    layoutId="nav-active"
                                    className={cn(
                                        'absolute inset-0 rounded-full z-0',
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
                                        'relative z-10 font-bold text-2xl px-4 py-2 rounded-full transition-colors duration-300',
                                        {
                                            'text-white':
                                                (activeLink && !isOnDark) ||
                                                (!activeLink && isOnDark),
                                            'text-black':
                                                (activeLink && isOnDark) ||
                                                (!activeLink && isOnDark),
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
                                        'relative z-10 font-bold text-2xl px-4 py-2 rounded-full transition-colors duration-300',
                                        {
                                            'text-white':
                                                (activeLink && !isOnDark) ||
                                                (!activeLink && isOnDark),
                                            'text-black':
                                                (activeLink && isOnDark) ||
                                                (!activeLink && !isOnDark),
                                        },
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
