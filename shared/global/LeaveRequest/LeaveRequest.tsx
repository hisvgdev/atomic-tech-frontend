'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from '@tanstack/react-form'
import React, { FC } from 'react'

import { LeaveRequestPayload, leaveRequestSchema } from '@/lib/schema/leave-request-schema'

import { LeaveRequestProps } from './LeaveRequest.types'

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
        onSubmit: (data) => {
            console.log(data.value)
        },
    })
    return (
        <section
            data-dark="true"
            className="w-full px-24 py-14 rounded-[3.125rem] bg-gradient-main"
        >
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-3 max-w-xl">
                    <h1 className="font-bold text-5xl text-white">
                        Начните разработку проекта вместе с нами
                    </h1>
                    <p className="text-white text-lg font-normal">
                        Оставьте заявку и мы свяжемся с вами в ближайший час
                    </p>
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        form.handleSubmit()
                    }}
                >
                    <div className="flex flex-col gap-y-4 max-w-6xl">
                        <div className="flex items-center gap-x-2.5">
                            <form.Field
                                name="email"
                                children={({ state, handleBlur, handleChange }) => (
                                    <div className="flex flex-col gap-y-1 w-full">
                                        <Input
                                            aria-invalid={!!state.meta.errors[0]?.message}
                                            value={state.value}
                                            type="email"
                                            name="email"
                                            placeholder="example@mail.com"
                                            onChange={(e) => handleChange(e.target.value)}
                                            onBlur={handleBlur}
                                            className="rounded-full border border-[#FFFFFF99] py-7 px-5 text-white w-full placeholder:text-white/50 outline-none"
                                        />
                                        {state.meta.errors.length > 0 && (
                                            <p className="text-red-500 text-xs">
                                                {state.meta.errors[0]?.message}
                                            </p>
                                        )}
                                    </div>
                                )}
                            />
                            <form.Field
                                name="phone"
                                children={({ state, handleBlur, handleChange }) => (
                                    <div className="flex flex-col gap-y-1 w-full">
                                        <Input
                                            aria-invalid={!!state.meta.errors[0]?.message}
                                            value={state.value}
                                            type="phone"
                                            name="phone"
                                            placeholder="+7 (123) 456-78-90"
                                            onChange={(e) => handleChange(e.target.value)}
                                            onBlur={handleBlur}
                                            className="rounded-full border border-[#FFFFFF99] py-7 px-5 text-white w-full placeholder:text-white/50 outline-none"
                                        />
                                        {state.meta.errors.length > 0 && (
                                            <p className="text-red-500 text-xs">
                                                {state.meta.errors[0]?.message}
                                            </p>
                                        )}
                                    </div>
                                )}
                            />
                            <form.Field
                                name="nickname"
                                children={({ state, handleBlur, handleChange }) => (
                                    <div className="flex flex-col gap-y-1 w-full">
                                        <Input
                                            aria-invalid={!!state.meta.errors[0]?.message}
                                            value={state.value}
                                            type="text"
                                            name="nickname"
                                            placeholder="Ник телеграм (если есть)"
                                            onChange={(e) => handleChange(e.target.value)}
                                            onBlur={handleBlur}
                                            className="rounded-full border border-[#FFFFFF99] py-7 px-5 text-white w-full placeholder:text-white/50 outline-none"
                                        />
                                        {state.meta.errors.length > 0 && (
                                            <p className="text-red-500 text-xs">
                                                {state.meta.errors[0]?.message}
                                            </p>
                                        )}
                                    </div>
                                )}
                            />
                        </div>
                        <Button
                            type="submit"
                            className="bg-white rounded-full text-black py-7 font-bold text-sm max-w-64 cursor-pointer hover:bg-white/70"
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
                                        <Label
                                            htmlFor="terms"
                                            className="text-white/50 max-w-xs cursor-pointer"
                                        >
                                            Нажимая кнопку, вы даете согласие на обработку
                                            персональных данных
                                        </Label>
                                        {state.meta.errors.length > 0 && (
                                            <p className="text-red-500 text-xs">
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
