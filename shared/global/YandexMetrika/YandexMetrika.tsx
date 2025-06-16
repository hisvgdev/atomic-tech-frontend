'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

declare global {
    interface Window {
        ym: (...args: any[]) => void
    }
}

const ym = (...args: any[]) => {
    if (typeof window !== 'undefined' && typeof window.ym === 'function') {
        window.ym(...args)
    }
}

export const YandexMetrika = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const url = pathname + '?' + searchParams.toString()
        ym(102683588, 'hit', url)
    }, [pathname, searchParams])

    return (
        <Script id="yandex-metrika" strategy="afterInteractive">
            {`
                                (function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
                                  m[i].l=1*new Date();
                                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                                  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                                  ym(102683588, "init", {
                                          clickmap:true,
                                          trackLinks:true,
                                          accurateTrackBounce:true
                                  });
                          `}
        </Script>
    )
}
