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
import { useAtomicClient } from '@/hooks/useAtomicClient'
import { AtomicClient } from '@/utils/shared/atomic-client/atomic-client'
import { ReviewCreate } from '@/utils/shared/atomic-client/types'
import { useForm } from '@tanstack/react-form'
import toast from 'react-hot-toast'

import { customSolutionReview, CustomSolutionReviewValidate } from '../CustomSolutions.validate'

const handleSubmitReview = (requestBody: ReviewCreate, atomicClient: AtomicClient) => {
     try {
          const promise = atomicClient.reviews.create(requestBody)
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

export const CustomSolutionsAddingFeedbackDialog = () => {
     const { atomicClient } = useAtomicClient()

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
               if (!atomicClient) return

               handleSubmitReview(data.value, atomicClient)
          },
     })
     return (
          <Dialog>
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
                                   Поделитесь своим мнением о нашем сервисе — нам важно ваше мнение. Напишите, что вам
                                   понравилось, что можно улучшить, и помогите другим пользователям сделать правильный
                                   выбор.
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
                                                       onChange={(e) => field.handleChange(e.target.value)}
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
                                                       onChange={(e) => field.handleChange(e.target.value)}
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
                                                       onChange={(e) => field.handleChange(e.target.valueAsNumber)}
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
                                                       onChange={(e) => field.handleChange(e.target.value)}
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
                                                  <Label htmlFor="checkbox" className="cursor-pointer text-xs">
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
                              <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
                                   {([canSubmit, isSubmitting]) => (
                                        <Button
                                             type="submit"
                                             disabled={!canSubmit}
                                             className="mt-4 w-full cursor-pointer rounded-full p-6"
                                        >
                                             {isSubmitting ? 'Отправляем ваш отзыв...' : 'Отправить отзыв'}
                                        </Button>
                                   )}
                              </form.Subscribe>
                         </DialogFooter>
                    </form>
               </DialogContent>
          </Dialog>
     )
}
