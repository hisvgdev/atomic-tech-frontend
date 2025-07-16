import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import React, { FC } from 'react'

import { OtherTagsProps } from './OtherTags.types'

export const OtherTags: FC<OtherTagsProps> = (props) => {
    const {} = props
    return (
        <section data-dark="true" className="w-full bg-[#000809] py-20 lg:py-32">
            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center">
                <div className="flex flex-col gap-16">
                    <div className="flex lg:items-center lg:gap-x-[7.5rem]">
                        <button type="button" className="cursor-pointer">
                            <div className="flex items-center gap-x-2">
                                <h4 className="text-white font-bold text-2xl">
                                    <span className="underline">Гайды</span>
                                    <sup className="text-white/50">11</sup>
                                </h4>
                                <ArrowRightIcon size={18} color="#9A9C9D" />
                            </div>
                        </button>
                        <button type="button" className="cursor-pointer">
                            <div className="flex items-center gap-x-2">
                                <h4 className="text-white font-bold text-2xl">
                                    <span className="underline">Истории</span>
                                    <sup className="text-white/50">4</sup>
                                </h4>
                                <ArrowRightIcon size={18} color="#9A9C9D" />
                            </div>
                        </button>
                        <button type="button" className="cursor-pointer">
                            <div className="flex items-center gap-x-2">
                                <h4 className="text-white font-bold text-2xl">
                                    <span className="underline">Подборки</span>
                                    <sup className="text-white/50">16</sup>
                                </h4>
                                <ArrowRightIcon size={18} color="#9A9C9D" />
                            </div>
                        </button>
                    </div>
                    <div className="flex lg:justify-center lg:items-center lg:gap-x-[7.5rem]">
                        <button type="button" className="cursor-pointer">
                            <div className="flex items-center gap-x-2">
                                <h4 className="text-white font-bold text-2xl">
                                    <span className="underline">Разборы</span>
                                    <sup className="text-white/50">3</sup>
                                </h4>
                                <ArrowRightIcon size={18} color="#9A9C9D" />
                            </div>
                        </button>
                        <button type="button" className="cursor-pointer">
                            <div className="flex items-center gap-x-2">
                                <h4 className="text-white font-bold text-2xl">
                                    <span className="underline">Спецпроекты</span>
                                    <sup className="text-white/50">29</sup>
                                </h4>
                                <ArrowRightIcon size={18} color="#9A9C9D" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
