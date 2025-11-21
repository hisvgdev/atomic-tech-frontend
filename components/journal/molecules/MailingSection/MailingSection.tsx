'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import mailingImage from '@/public/assets/images/mailingImage.png'
import { useForm } from '@tanstack/react-form'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import { MailingPayload, mailingSchema } from '@/lib/schema/mailing-schema'

import { MailingSectionProps } from './MailingSection.types'

export const MailingSection: FC<MailingSectionProps> = (props) => {
     const {} = props
     const form = useForm({
          validators: {
               onChange: mailingSchema,
          },
          defaultValues: {
               email: '',
               terms: true,
          } as MailingPayload,
          onSubmit: (data) => {
               console.log(data.value)
          },
     })
     return (
          <section data-dark="true">
               <div className="bg-gradient-main w-full rounded-[1.875rem] p-8 lg:p-16">
                    <div className="flex items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
                         <div className="flex w-full flex-col gap-9 lg:max-w-3xl">
                              <h1 className="text-4xl font-bold lg:text-5xl">
                                   <span className="text-white/80">«PRO</span>
                                   <span className="text-white">GER»</span>
                                   <span className="text-white">— рассылка о том, что полезно и актуально</span>
                              </h1>
                              <p className="text-lg font-normal text-white/50 lg:text-xl">
                                   Искренние письма о работе и жизни, эксклюзивные кейсы и интервью с экспертами
                                   диджитала.
                              </p>
                              <form
                                   onSubmit={(e) => {
                                        e.preventDefault()
                                        form.handleSubmit()
                                   }}
                              >
                                   <div className="flex flex-col gap-y-5">
                                        <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center">
                                             <form.Field
                                                  name="email"
                                                  children={({ state, handleBlur, handleChange }) => (
                                                       <div className="flex w-full flex-col gap-y-1">
                                                            <Input
                                                                 aria-invalid={!!state.meta.errors[0]?.message}
                                                                 value={state.value}
                                                                 type="email"
                                                                 name="email"
                                                                 placeholder="example@mail.com"
                                                                 onChange={(e) => handleChange(e.target.value)}
                                                                 onBlur={handleBlur}
                                                                 className="w-full rounded-full border border-[#FFFFFF99] px-5 py-7 text-white outline-none placeholder:text-white/50"
                                                            />
                                                            {state.meta.errors.length > 0 && (
                                                                 <p className="text-xs text-red-500">
                                                                      {state.meta.errors[0]?.message}
                                                                 </p>
                                                            )}
                                                       </div>
                                                  )}
                                             />
                                             <Button
                                                  type="submit"
                                                  className="min-w-64 cursor-pointer rounded-full bg-white py-7 text-sm font-bold text-black hover:bg-white/70"
                                             >
                                                  Подписаться
                                             </Button>
                                        </div>
                                        <div className="flex items-center gap-x-4">
                                             <form.Field
                                                  name="terms"
                                                  children={({ state, handleChange }) => (
                                                       <div className="flex items-center gap-x-2">
                                                            <Checkbox
                                                                 id="terms"
                                                                 checked={state.value}
                                                                 onCheckedChange={(checked) => handleChange(!!checked)}
                                                            />
                                                            <div className="flex flex-col">
                                                                 <Label
                                                                      htmlFor="terms"
                                                                      className="flex flex-col gap-0 lg:flex-row lg:gap-2"
                                                                 >
                                                                      <span className="text-sm text-white/40">
                                                                           Оставляя свой email, вы принимаете
                                                                      </span>
                                                                      <Link
                                                                           href="/policy"
                                                                           className="w-full text-sm font-normal text-white underline lg:w-fit"
                                                                      >
                                                                           Политику конфиденциальности
                                                                      </Link>
                                                                 </Label>
                                                                 {state.meta.errors.length > 0 && (
                                                                      <p className="text-xs text-red-500">
                                                                           {state.meta.errors[0]?.message}
                                                                      </p>
                                                                 )}
                                                            </div>
                                                       </div>
                                                  )}
                                             />
                                        </div>
                                   </div>
                              </form>
                         </div>
                         <Image src={mailingImage} alt="mailingImage" />
                    </div>
               </div>
          </section>
     )
}
