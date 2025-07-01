import React, { FC } from 'react'

import { BannerProps } from './Banner.types'

export const Banner: FC<BannerProps> = (props) => {
    const { title = 'Журнал' } = props
    return (
        <section data-dark="true">
            <div className="w-full rounded-4xl py-8 bg-gradient-main">
                <div className="flex items-center justify-center">
                    <div className="flex items-center gap-x-10">
                        <h1 className="font-bold text-6xl">
                            <span className="text-white/80">PRO</span>
                            <span className="text-white">GER</span>
                        </h1>
                        <p className="font-semibold text-base text-white">
                            IT {title} <br /> от Atomic Code
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
