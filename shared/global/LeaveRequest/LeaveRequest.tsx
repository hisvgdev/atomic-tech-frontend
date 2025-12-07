'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AtomicClient } from '@/utils/shared/atomic-client/atomic-client'
import { CreateLeadInput } from '@/utils/shared/atomic-client/types'
import { useForm } from '@tanstack/react-form'
import { AxiosError } from 'axios'
import React, { FC, useEffect } from 'react'
import toast from 'react-hot-toast'

import { LeaveRequestPayload, leaveRequestSchema } from '@/lib/schema/leave-request-schema'

import { LeaveRequestProps } from './LeaveRequest.types'

const handleCreateLead = async (body: CreateLeadInput) => {
     try {
          const atomicClient = new AtomicClient({
               baseURL: process.env.NEXT_PUBLIC_API_BASE_URL!,
          })
          await atomicClient.ready
          return await atomicClient.leads.create(body)
     } catch (error) {
          if (error instanceof AxiosError) {
               console.error('Axios Error', error.response)
          } else {
               console.error('Default Error:', error)
          }
     }
}

export const LeaveRequest: FC<LeaveRequestProps> = (props) => {
     const {} = props
     const form = useForm({
          validators: {
               onChange: leaveRequestSchema,
          },
          defaultValues: {
               email: '',
               phone: '',
               nickname: '',
               terms: true,
          } as LeaveRequestPayload,
          onSubmit: async (data) => {
               const { email, phone, nickname } = data.value

               const requestBody = nickname
                    ? {
                           email,
                           phone,
                           telegram_username: nickname,
                      }
                    : {
                           email,
                           phone,
                      }

               const promise = handleCreateLead(requestBody)

               toast.promise(promise, {
                    loading: 'Пожалуйста подождите мы записываем вашу заявку',
                    success: 'Вы успешно оставили заявку, мы обязательно ее обработаем и дадим вам обратную связь!',
                    error: 'Произошла ошибка, пожалуйста обратитесь в тех.поддержку!',
               })

               try {
                    await promise
               } catch (err) {
                    console.error(err)
               }
          },
     })

     useEffect(() => {
          if (window.location.hash === '#bottom') {
               window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })

               history.replaceState(null, '', window.location.pathname)
          }
     }, [])

     return (
          <section
               id="leave-request"
               data-dark="true"
               className="bg-gradient-main w-full rounded-4xl p-8 lg:rounded-3xl lg:px-24 lg:py-14"
          >
               <div className="flex flex-col gap-y-4">
                    <div className="flex max-w-5xl flex-col gap-y-3">
                         <h1 className="w-full text-3xl font-bold tracking-tight text-white lg:text-5xl">
                              Начните разработку проекта вместе с нами
                         </h1>
                         <p className="text-sm font-normal text-white lg:text-lg">
                              Оставьте свои контактные данные и мы свяжемся с вами в ближайший час, чтобы провести аудит
                              готового продукта или предложить варианты реализации вашей идеи.
                         </p>
                    </div>
                    <form
                         onSubmit={(e) => {
                              e.preventDefault()
                              form.handleSubmit()
                         }}
                    >
                         <div className="flex max-w-6xl flex-col gap-y-4">
                              <div className="flex flex-col items-center gap-2.5 lg:flex-row">
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
                                   <form.Field
                                        name="phone"
                                        children={({ state, handleBlur, handleChange }) => (
                                             <div className="flex w-full flex-col gap-y-1">
                                                  <Input
                                                       aria-invalid={!!state.meta.errors[0]?.message}
                                                       value={state.value}
                                                       type="phone"
                                                       name="phone"
                                                       placeholder="+7 (123) 456-78-90"
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
                                   <form.Field
                                        name="nickname"
                                        children={({ state, handleBlur, handleChange }) => (
                                             <div className="flex w-full flex-col gap-y-1">
                                                  <Input
                                                       aria-invalid={!!state.meta.errors[0]?.message}
                                                       value={state.value}
                                                       type="text"
                                                       name="nickname"
                                                       placeholder="Ник телеграм (если есть)"
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
                              </div>
                              <Button
                                   type="submit"
                                   className="max-w-64 cursor-pointer rounded-full bg-white py-7 text-sm font-bold text-black hover:bg-white/70"
                              >
                                   Оставить заявку
                              </Button>
                              <form.Field
                                   name="terms"
                                   children={({ state, handleChange }) => (
                                        <div className="flex items-start gap-x-3">
                                             <Checkbox
                                                  id="terms"
                                                  checked={state.value}
                                                  onCheckedChange={(checked) => handleChange(!!checked)}
                                             />
                                             <div className="flex flex-col">
                                                  <Label htmlFor="terms" className="cursor-pointer text-white/50">
                                                       Нажимая кнопку, вы даете согласие на обработку персональных
                                                       данных
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
                    </form>
               </div>
          </section>
     )
}
