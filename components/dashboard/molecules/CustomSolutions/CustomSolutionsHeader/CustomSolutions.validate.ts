import z from "zod";

export const customSolutionReview = z.object({
  name: z.string().min(3, 'Необходимо ввести минимум 3 символа!'),
  company: z.string().min(3, 'Необходимо ввести минимум 3 символа!'),
  rating: z.number({ message: 'Мы ожидаем что вы введете свою отметку!' }).max(5, 'Максимально допустима отметка - 5').min(1, 'Минимальная допустимая отметка - 1'),
  review_text: z.string().max(500, 'Вы превысили свой лимит отзыва в 500 символов!').min(20, 'Необходимо минимум 20 символов'),
  agreement_accepted: z.boolean().refine(
    (val) => val !== false,
    (val) => ({ message: 'Мы не можем отправить ваш отзыв без вашего одобрения!' })
  ),
})

export type CustomSolutionReviewValidate = z.infer<typeof customSolutionReview>