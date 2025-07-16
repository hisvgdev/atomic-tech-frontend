'use client'

import notFoundMiddle from '@/public/assets/images/not-found/not-found-middle.svg'
import smile from '@/public/assets/images/not-found/smile.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Error() {
    return (
        <main className="grid  place-items-center bg-white px-6 py-12 sm:py-32 lg:px-8">
            <div className="flex flex-col items-center justify-center gap-8 lg:gap-20">
                <div className="flex flex-col gap-8">
                    <h1 className="mt-4 text-xl text-center font-bold tracking-tight text-gray-900 sm:text-3xl">
                        Страница не найдена
                    </h1>
                    <div className="flex items-center justify-center">
                        <p className="font-bold text-7xl lg:text-[15.3rem] lg:leading-14">4</p>
                        <div className="relative">
                            <Image
                                src={notFoundMiddle}
                                alt="not-found-middle"
                                className="w-20 lg:w-auto"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image src={smile} alt="smile" className="w-6 lg:w-auto" />
                            </div>
                        </div>
                        <p className="font-bold text-7xl lg:text-[15.3rem] lg:leading-14">4</p>
                    </div>
                </div>
                <Link
                    href="/"
                    className="ring ring-[#676767] rounded-full px-8 py-3 lg:py-6 lg:px-20"
                >
                    Вернуться на главную
                </Link>
            </div>
        </main>
    )
}
