'use client'

import instagramIcon from '@/public/assets/icons/instagram.svg'
import telegramIcon from '@/public/assets/icons/telegram.svg'
import tgBotIcon from '@/public/assets/icons/tgBot.svg'
import youtubeIcon from '@/public/assets/icons/youtube.svg'
import GradientButton from '@/shared/custom/GradientButton'
import { ChevronUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const mockSocietyData = [
    {
        id: uuidv4(),
        title: 'YouTube',
        href: 'https://youtube.com/@tech-lifuck',
        icon: youtubeIcon,
    },
    {
        id: uuidv4(),
        title: 'Telegram',
        href: 'https://t.me/+ss6kxcGcuo41MDAy',
        icon: telegramIcon,
    },
    {
        id: uuidv4(),
        title: 'Telegram bot',
        href: 'https://t.me/TeIega_Ultra_Settings_bot',
        icon: tgBotIcon,
    },
    {
        id: uuidv4(),
        title: 'Instagram',
        href: 'https://www.instagram.com/atomic_technologies',
        icon: instagramIcon,
    },
]

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }

    return (
        <footer className="mt-auto">
            <div className="mt-4 bg-black py-6 px-8 max-w-8xl rounded-t-[3.125rem]  lg:rounded-[3.125rem] lg:mb-6 lg:mx-4 lg:mt-16">
                <div className="w-full flex flex-col lg:flex-row lg:justify-between">
                    <div className="flex flex-col gap-y-20">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-6 pb-24 lg:pb-0">
                            {mockSocietyData.map((society, indx) => {
                                return (
                                    <div
                                        key={`${indx}-${society.id}`}
                                        className="flex items-center"
                                    >
                                        <Image
                                            src={society.icon}
                                            alt={society.title}
                                            width={36}
                                            height={36}
                                            className="object-contain"
                                        />
                                        <Link
                                            href={society.href}
                                            target="_blank"
                                            className="text-white font-bold text-sm pl-2"
                                        >
                                            {society.title}
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="hidden lg:flex lg:items-center lg:gap-x-14">
                            <span className="text-[#767676] font-normal text-xs">
                                ИП Зурнаджян 237201792931
                            </span>
                            <Link
                                href="/policy"
                                className="text-white font-normal text-xs underline"
                            >
                                Политика конфиденциальности
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-12 max-w-lg">
                        <div className="flex items-start flex-col gap-y-12 lg:items-center lg:flex-row lg:gap-x-24">
                            <div className="flex flex-col w-full gap-2">
                                <div className="flex items-center gap-1.5">
                                    <Image
                                        src={telegramIcon}
                                        color="#FFFFFF"
                                        alt="tg-icon"
                                        className="w-4 h-4"
                                    />
                                    <Link href="#" className="text-white font-bold text-lg">
                                        Telegram Bot
                                    </Link>
                                </div>
                                <Link href="#" className="font-bol text-lg text-white underline">
                                    Заполнить бриф
                                </Link>
                            </div>
                            <div className="flex items-center w-full justify-between">
                                <GradientButton
                                    isWhite
                                    title="Связать с менеджером"
                                    classNames="rounded-full py-8"
                                />
                                <div className="flex items-center gap-x-2 lg:hidden">
                                    <span className="text-white font-bold text-xs">Наверх</span>
                                    <button
                                        type="button"
                                        className="bg-white w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
                                        onClick={scrollToTop}
                                    >
                                        <ChevronUp />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr className="bg-white/70 w-full" />
                        <div className="flex items-start flex-col gap-y-4 lg:gap-y-0 lg:items-center lg:flex-row lg:justify-between">
                            <span className="text-white text-xs font-normal -tracking-[0.01rem] max-w-80">
                                * Социальные сети Instagram и Facebook запрещены в РФ. Решением суда
                                от 21.03.2022
                            </span>
                            <div className="flex items-center w-full justify-between lg:hidden">
                                <span className="text-[#767676] font-normal text-xs">
                                    ИП Зурнаджян 237201792931
                                </span>
                                <Link
                                    href="/policy"
                                    className="text-white font-normal text-xs underline"
                                >
                                    Политика конфиденциальности
                                </Link>
                            </div>
                            <div className="hidden lg:flex lg:items-center lg:gap-x-2">
                                <span className="text-white font-bold text-xs">Наверх</span>
                                <button
                                    type="button"
                                    className="bg-white w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
                                    onClick={scrollToTop}
                                >
                                    <ChevronUp />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
