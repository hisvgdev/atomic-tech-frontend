'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from '@tanstack/react-form'
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
        <section
            data-dark="true"
            className="w-full p-8 rounded-[1.875rem] bg-gradient-main mt-14 lg:p-16"
        >
            <div className="flex items-center gap-8 lg:gap-0 lg:flex-row lg:items-center lg:justify-center">
                <div className="flex flex-col gap-9 w-full lg:max-w-3xl">
                    <h1 className="font-bold text-4xl lg:text-5xl">
                        <span className="text-white/80">«PRO</span>
                        <span className="text-white">GER»</span>
                        <span className="text-white">
                            — рассылка о том, что полезно и актуально
                        </span>
                    </h1>
                    <p className="text-white/50 font-normal text-lg lg:text-xl">
                        Искренние письма о работе и жизни, эксклюзивные кейсы и интервью с
                        экспертами диджитала.
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
                                <Button
                                    type="submit"
                                    className="bg-white rounded-full text-black py-7 font-bold text-sm min-w-64 cursor-pointer hover:bg-white/70"
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
                                                onCheckedChange={(checked) =>
                                                    handleChange(!!checked)
                                                }
                                            />
                                            <div className="flex flex-col">
                                                <Label
                                                    htmlFor="terms"
                                                    className="flex flex-col gap-0 lg:gap-2 lg:flex-row"
                                                >
                                                    <span className="text-white/40 text-sm">
                                                        Оставляя свой email, вы принимаете
                                                    </span>
                                                    <Link
                                                        href="/policy"
                                                        className="text-white underline w-full text-sm font-normal lg:text-base lg:w-auto"
                                                    >
                                                        Политику конфиденциальности
                                                    </Link>
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
                        </div>
                    </form>
                </div>
                {/* <div className="bg-white w-full h-80 rounded-3xl lg:w-1/4" /> */}
            </div>
        </section>
    )
}
