'use client'

import instagramIcon from '@/public/assets/icons/instagram.svg'
import telegramIcon from '@/public/assets/icons/telegram.svg'
import tgBotIcon from '@/public/assets/icons/tgBot.svg'
import youtubeIcon from '@/public/assets/icons/youtube.svg'
import GradientButton from '@/shared/custom/GradientButton'
import { ChevronUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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
               <div className="max-w-8xl mt-4 rounded-t-[3.125rem] bg-black px-8 py-6 lg:mx-4 lg:mt-16 lg:mb-6 lg:rounded-[3.125rem]">
                    <div className="flex w-full flex-col lg:flex-row lg:justify-between">
                         <div className="flex flex-col gap-20">
                              <div className="grid grid-cols-2 gap-8 pb-24 lg:pb-0">
                                   {mockSocietyData.map((society, indx) => {
                                        const isSpecial = indx === 1 || indx === 3
                                        return (
                                             <div
                                                  key={`${indx}-${society.id}`}
                                                  className={`flex items-center gap-4 ${isSpecial ? 'justify-end' : ''}`}
                                             >
                                                  <Image
                                                       src={society.icon}
                                                       alt={society.title}
                                                       width={36}
                                                       height={36}
                                                       className="h-9 w-9 object-contain"
                                                  />
                                                  <Link
                                                       href={society.href as any}
                                                       target="_blank"
                                                       className="text-sm font-bold text-white transition-all hover:underline"
                                                  >
                                                       {society.title}
                                                  </Link>
                                             </div>
                                        )
                                   })}
                              </div>
                              <div className="hidden lg:flex lg:items-center lg:gap-x-14">
                                   <span className="text-xs font-normal text-[#767676]">ИП Зурнаджян 237201792931</span>
                                   <Link href="/policy" className="text-xs font-normal text-white underline">
                                        Политика конфиденциальности
                                   </Link>
                              </div>
                         </div>
                         <div className="flex max-w-lg flex-col gap-y-12">
                              <div className="flex flex-col items-start gap-y-12 lg:flex-row lg:items-center lg:gap-x-24">
                                   <div className="flex w-full flex-col gap-2">
                                        <div className="flex items-center gap-1.5">
                                             <Image
                                                  src={telegramIcon}
                                                  color="#FFFFFF"
                                                  alt="tg-icon"
                                                  className="h-4 w-4"
                                             />
                                             <Link
                                                  href="https://t.me/TeIega_Ultra_Settings_bot"
                                                  target="_blank"
                                                  className="transtion-all text-lg font-bold text-white hover:underline"
                                             >
                                                  Telegram Bot
                                             </Link>
                                        </div>
                                        <Link
                                             href="https://forms.yandex.ru/cloud/6895f78e50569040447cd20d"
                                             target="_blank"
                                             className="font-bol text-lg text-white underline"
                                        >
                                             Заполнить бриф
                                        </Link>
                                   </div>
                                   <div className="flex w-full items-center justify-between">
                                        <GradientButton
                                             isWhite
                                             title="Связать с менеджером"
                                             titleSize="text-md"
                                             classNames="rounded-full py-8"
                                             routePath="https://t.me/Atomic_Code"
                                             hasIsRoute
                                        />
                                        <button
                                             type="button"
                                             className="flex cursor-pointer items-center gap-x-2 lg:hidden"
                                             onClick={scrollToTop}
                                        >
                                             <span className="text-xs font-bold text-white">Наверх</span>
                                             <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white">
                                                  <ChevronUp />
                                             </div>
                                        </button>
                                   </div>
                              </div>
                              <hr className="w-full bg-white/70" />
                              <div className="flex flex-col items-start gap-y-4 lg:flex-row lg:items-center lg:justify-between lg:gap-y-0">
                                   <span className="max-w-80 text-xs font-normal -tracking-[0.01rem] text-white">
                                        * Социальные сети Instagram и Facebook запрещены в РФ. Решением суда от
                                        21.03.2022
                                   </span>
                                   <div className="flex w-full items-center justify-between lg:hidden">
                                        <span className="text-xs font-normal text-[#767676]">
                                             ИП Зурнаджян 237201792931
                                        </span>
                                        <Link href="/policy" className="text-xs font-normal text-white underline">
                                             Политика конфиденциальности
                                        </Link>
                                   </div>
                                   <button
                                        type="button"
                                        className="hidden cursor-pointer items-center gap-2 lg:flex"
                                        onClick={scrollToTop}
                                   >
                                        <span className="text-xs font-bold text-white">Наверх</span>
                                        <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white">
                                             <ChevronUp />
                                        </div>
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </footer>
     )
}
