'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
     Dialog,
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
import { addingReviews } from '@/utils/api/actions/reviews.action'
import { getCategories } from '@/utils/api/categories/categories'
import { useForm } from '@tanstack/react-form'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { FC, useCallback } from 'react'
import toast from 'react-hot-toast'

import { customSolutionReview, CustomSolutionReviewValidate } from './CustomSolutions.validate'
import { CustomSolutionsHeaderProps } from './CustomSolutionsHeader.types'

export interface CreateReviewInput {
     name: string
     company: string
     rating: number
     review_text: string
     agreement_accepted: boolean
}

const handleSubmitReview = (requestBody: CreateReviewInput) => {
     try {
          const promise = addingReviews(requestBody)
          toast.promise(promise, {
               success: 'Вы успешно отправили свой отзыв!',
               loading: 'Подождите минутку мы отправляем ваш отзыв!',
               error: 'Произошла ошибка при отправке вашего отзыва, попробуй еще раз или обратитесь в тех.поддержку',
          })
          return promise
     } catch (error) {
          console.log(error)
     }
}

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

     const form = useForm({
          validators: {
               onChange: customSolutionReview,
          },
          defaultValues: {
               name: '',
               company: '',
               rating: 5,
               review_text: '',
               agreement_accepted: true,
          } as CustomSolutionReviewValidate,
          onSubmit: (data) => {
               handleSubmitReview(data.value)
          },
     })

     return (
          <div className="flex w-full items-center justify-between lg:px-8 lg:py-12">
               <Chip number="2" title="Отзывы" maxW={isMobile ? 'max-w-44' : 'max-w-fit'} />
               <h4 className="text-right leading-tight -tracking-[0.1rem] lg:-tracking-[0.2rem]">
                    <span className="text-3xl font-bold text-black md:text-7xl">
                         Что говорят наши <span className="text-[#0085A6]">клиенты</span>
                    </span>
               </h4>
          </div>
     )
}

{
     /* <div className="grid w-full max-w-4xl grid-cols-3 gap-x-10 gap-y-4 text-xl font-medium whitespace-nowrap text-gray-600">
                                   {!isCategoriesPending
                                        ? categoriesData?.data.map((c, i) => (
                                               <Link
                                                    href={`/cases?${createQueryString('category_id', String(c.id))}`}
                                                    key={i}
                                                    className="transition-all hover:underline"
                                               >
                                                    {c.name}
                                               </Link>
                                          ))
                                        : null}
                              </div> */
}
{
     /* <Dialog>
                                   <DialogTrigger asChild>
                                        <Button className="flex cursor-pointer items-center gap-2 rounded-full border bg-transparent px-8 py-6 text-lg font-medium text-black hover:bg-transparent">
                                             Добавить отзыв <span className="text-xl">+</span>
                                        </Button>
                                   </DialogTrigger>
                                   <DialogContent className="sm:max-w-md">
                                        <form
                                             className="flex flex-col gap-4"
                                             onSubmit={(e) => {
                                                  e.preventDefault()
                                                  form.handleSubmit()
                                             }}
                                        >
                                             <DialogHeader>
                                                  <DialogTitle>Добавить свой отзыв</DialogTitle>
                                                  <DialogDescription>
                                                       Поделитесь своим мнением о нашем сервисе — нам важно ваше мнение.
                                                       Напишите, что вам понравилось, что можно улучшить, и помогите
                                                       другим пользователям сделать правильный выбор.
                                                  </DialogDescription>
                                             </DialogHeader>
                                             <div className="grid gap-4">
                                                  <div className="grid gap-3">
                                                       <Label htmlFor="name">Имя</Label>
                                                       <form.Field name="name">
                                                            {(field) => (
                                                                 <>
                                                                      <Input
                                                                           id="name"
                                                                           placeholder="Константин"
                                                                           name={field.name}
                                                                           value={field.state.value}
                                                                           onChange={(e) =>
                                                                                field.handleChange(e.target.value)
                                                                           }
                                                                      />
                                                                      {field.state.meta.errors && (
                                                                           <span className="text-xs text-red-500">
                                                                                {field.state.meta.errors[0]?.message}
                                                                           </span>
                                                                      )}
                                                                 </>
                                                            )}
                                                       </form.Field>
                                                  </div>
                                                  <div className="grid gap-3">
                                                       <Label htmlFor="company">Компания</Label>
                                                       <form.Field name="company">
                                                            {(field) => (
                                                                 <>
                                                                      <Input
                                                                           id="company"
                                                                           placeholder="Солвит"
                                                                           name={field.name}
                                                                           value={field.state.value}
                                                                           onChange={(e) =>
                                                                                field.handleChange(e.target.value)
                                                                           }
                                                                      />
                                                                      {field.state.meta.errors && (
                                                                           <span className="text-xs text-red-500">
                                                                                {field.state.meta.errors[0]?.message}
                                                                           </span>
                                                                      )}
                                                                 </>
                                                            )}
                                                       </form.Field>
                                                  </div>
                                                  <div className="grid gap-3">
                                                       <Label htmlFor="rating">Оценка</Label>
                                                       <form.Field name="rating">
                                                            {(field) => (
                                                                 <>
                                                                      <Input
                                                                           type="number"
                                                                           min={1}
                                                                           max={5}
                                                                           id="rating"
                                                                           name={field.name}
                                                                           defaultValue="5"
                                                                           onChange={(e) =>
                                                                                field.handleChange(
                                                                                     e.target.valueAsNumber,
                                                                                )
                                                                           }
                                                                      />
                                                                      {field.state.meta.errors && (
                                                                           <span className="text-xs text-red-500">
                                                                                {field.state.meta.errors[0]?.message}
                                                                           </span>
                                                                      )}
                                                                 </>
                                                            )}
                                                       </form.Field>
                                                  </div>
                                                  <div className="grid gap-3">
                                                       <Label htmlFor="review_text">Ваш отзыв</Label>
                                                       <form.Field name="review_text">
                                                            {(field) => (
                                                                 <>
                                                                      <Textarea
                                                                           id="review_text"
                                                                           maxLength={500}
                                                                           minLength={20}
                                                                           value={field.state.value}
                                                                           name={field.name}
                                                                           placeholder="Отличный сервис! Все было сделано качественно и в срок."
                                                                           onChange={(e) =>
                                                                                field.handleChange(e.target.value)
                                                                           }
                                                                      />
                                                                      {field.state.meta.errors && (
                                                                           <span className="text-xs text-red-500">
                                                                                {field.state.meta.errors[0]?.message}
                                                                           </span>
                                                                      )}
                                                                 </>
                                                            )}
                                                       </form.Field>
                                                  </div>
                                                  <form.Field name="agreement_accepted">
                                                       {(field) => (
                                                            <div className="flex flex-col gap-2">
                                                                 <div className="flex items-center gap-3">
                                                                      <Checkbox
                                                                           id="checkbox"
                                                                           checked={field.state.value}
                                                                           onCheckedChange={(checked) =>
                                                                                field.handleChange(Boolean(checked))
                                                                           }
                                                                      />
                                                                      <Label
                                                                           htmlFor="checkbox"
                                                                           className="cursor-pointer text-xs"
                                                                      >
                                                                           Даю согласие на публикацию своего отзыва
                                                                      </Label>
                                                                 </div>
                                                                 {field.state.meta.errors && (
                                                                      <span className="text-xs text-red-500">
                                                                           {field.state.meta.errors[0]?.message}
                                                                      </span>
                                                                 )}
                                                            </div>
                                                       )}
                                                  </form.Field>
                                             </div>
                                             <DialogFooter>
                                                  <form.Subscribe
                                                       selector={(state) => [state.canSubmit, state.isSubmitting]}
                                                  >
                                                       {([canSubmit, isSubmitting]) => (
                                                            <Button
                                                                 type="submit"
                                                                 disabled={!canSubmit}
                                                                 className="mt-4 w-full cursor-pointer rounded-full p-6"
                                                            >
                                                                 {isSubmitting
                                                                      ? 'Отправляем ваш отзыв...'
                                                                      : 'Отправить отзыв'}
                                                            </Button>
                                                       )}
                                                  </form.Subscribe>
                                             </DialogFooter>
                                        </form>
                                   </DialogContent>
                              </Dialog> */
}
