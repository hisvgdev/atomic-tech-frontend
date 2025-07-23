'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useIsMobile } from '@/hooks/useMediaQuery'
import Chip from '@/shared/global/Chip'
import { getCategories } from '@/utils/api/categories/categories'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { FC, useCallback } from 'react'

import { CustomSolutionsHeaderProps } from './CustomSolutionsHeader.types'

export const CustomSolutionsHeader: FC<CustomSolutionsHeaderProps> = (props) => {
    const {} = props
    const isMobile = useIsMobile()
    const searchParams = useSearchParams()

    const { data: categoriesData, isPending: isCategoriesPending } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => getCategories(),
        staleTime: Infinity,
    })

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams],
    )

    return !isMobile ? (
        <>
            <div className="flex items-start justify-between w-full px-8 py-12">
                <div className="max-w-xs w-full">
                    <Chip number="2" title="Отзывы" maxW="max-w-44" />
                </div>
                <div className="flex items-center justify-center w-full">
                    <div className="grow flex justify-center items-end flex-col gap-14">
                        <div className="w-full flex flex-col items-center gap-12 justify-center">
                            <div>
                                <h4 className="leading-tight -tracking-[0.2rem] max-w-4xl">
                                    <span className="block font-bold text-7xl text-black">
                                        Мы накопили большой опыт в разработке
                                    </span>
                                    <span className="block font-bold text-7xl text-primary-200">
                                        кастомных решений.
                                    </span>
                                </h4>
                            </div>
                            <div className="grid grid-cols-3 w-full max-w-4xl whitespace-nowrap gap-x-10 gap-y-4 text-xl text-gray-600 font-medium">
                                {!isCategoriesPending
                                    ? categoriesData?.data.map((c, i) => (
                                          <Link
                                              href={`/cases?${createQueryString('category_id', String(c.id))}`}
                                              key={i}
                                              className="hover:underline transition-all"
                                          >
                                              {c.name}
                                          </Link>
                                      ))
                                    : null}
                            </div>
                        </div>
                        <Dialog>
                            <form>
                                <DialogTrigger asChild>
                                    <Button className="border bg-transparent rounded-full py-6 px-8 text-lg font-medium flex items-center gap-2 cursor-pointer text-black hover:bg-transparent">
                                        Добавить отзыв <span className="text-xl">+</span>
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                        <DialogTitle>Добавить свой отзыв</DialogTitle>
                                        <DialogDescription>
                                            Поделитесь своим мнением о нашем сервисе — нам важно
                                            ваше мнение. Напишите, что вам понравилось, что можно
                                            улучшить, и помогите другим пользователям сделать
                                            правильный выбор.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4">
                                        <div className="grid gap-3">
                                            <Label htmlFor="name">Имя</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                defaultValue="Константин Зубровский"
                                            />
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="company">Компания</Label>
                                            <Input
                                                id="company"
                                                name="company"
                                                defaultValue="Солвит"
                                            />
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="rating">Оценка</Label>
                                            <Input
                                                type="number"
                                                min={1}
                                                max={5}
                                                id="rating"
                                                name="rating"
                                                defaultValue="5"
                                            />
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="feedback">Ваш отзыв</Label>
                                            <Textarea
                                                maxLength={500}
                                                minLength={20}
                                                id="feedback"
                                                name="feedback"
                                            />
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Checkbox
                                                id="checkbox"
                                                name="checkbox"
                                                defaultChecked
                                            />
                                            <p className="text-xs">
                                                Даю согласие на публикацию своего отзыва
                                            </p>
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button variant="outline">Отменить</Button>
                                        </DialogClose>
                                        <Button type="submit">Сохранить изменения</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </form>
                        </Dialog>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-3.5">
                <Chip number="2" title="Отзывы" maxW="max-w-44" />
                <h4 className="leading-tight max-w-6xl">
                    <span className="block font-bold text-5xl text-black">
                        Мы накопили большой опыт в разработке
                    </span>
                    <span className="block font-bold text-5xl text-primary-200">
                        кастомных решений.
                    </span>
                </h4>
            </div>
            <div className="flex flex-col items-end gap-20">
                <div className="grid grid-cols-2 justify-between w-full gap-10 text-gray-600 font-medium">
                    {!isCategoriesPending
                        ? categoriesData?.data.map((c, i) => (
                              <Link
                                  href={`/cases?${createQueryString('category_id', String(c.id))}`}
                                  key={i}
                                  className="hover:underline transition-all"
                              >
                                  {c.name}
                              </Link>
                          ))
                        : null}
                </div>
                <div className="h-full">
                    <Dialog>
                        <form>
                            <DialogTrigger asChild>
                                <Button className="border bg-transparent rounded-full py-6 px-8 text-lg font-medium flex items-center gap-2 cursor-pointer text-black hover:bg-transparent">
                                    Добавить отзыв <span className="text-xl">+</span>
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle>Добавить свой отзыв</DialogTitle>
                                    <DialogDescription>
                                        Поделитесь своим мнением о нашем сервисе — нам важно ваше
                                        мнение. Напишите, что вам понравилось, что можно улучшить, и
                                        помогите другим пользователям сделать правильный выбор.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4">
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">Имя</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            defaultValue="Константин Зубровский"
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="company">Компания</Label>
                                        <Input id="company" name="company" defaultValue="Солвит" />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="rating">Оценка</Label>
                                        <Input
                                            type="number"
                                            min={1}
                                            max={5}
                                            id="rating"
                                            name="rating"
                                            defaultValue="5"
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="feedback">Ваш отзыв</Label>
                                        <Textarea
                                            maxLength={500}
                                            minLength={20}
                                            id="feedback"
                                            name="feedback"
                                        />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Checkbox id="checkbox" name="checkbox" defaultChecked />
                                        <p className="text-xs">
                                            Даю согласие на публикацию своего отзыва
                                        </p>
                                    </div>
                                </div>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button variant="outline">Отменить</Button>
                                    </DialogClose>
                                    <Button type="submit">Сохранить изменения</Button>
                                </DialogFooter>
                            </DialogContent>
                        </form>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}
