'use client'

import { getWebInstrumentations, initializeFaro, ReactIntegration } from '@grafana/faro-react'
import { TracingInstrumentation } from '@grafana/faro-web-tracing'
import { useEffect } from 'react'

export function FaroProvider({ children }: { children: React.ReactNode }) {
     useEffect(() => {
          initializeFaro({
               url: 'https://faro-collector-prod-eu-west-2.grafana.net/collect/d36d76cf85b11950906ca179947b0dc5',
               apiKey: process.env.NEXT_PUBLIC_GRAFANA_FARO_API_KEY,
               app: {
                    name: 'atomic-tech',
                    version: '1.0.0',
                    environment: 'production',
               },

               instrumentations: [...getWebInstrumentations(), new TracingInstrumentation(), new ReactIntegration()],
          })
     }, [])

     return <>{children}</>
}
