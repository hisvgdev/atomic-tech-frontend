import { z } from 'zod'

export const mailingSchema = z.object({
     email: z
          .string()
          .min(1, { message: 'Данное поля является обязательным!' })
          .email({ message: 'Почта обязательная' }),
     terms: z.boolean().refine((val) => val === true, {
          message: 'Необходимо согласие с политикой',
     }),
})

export type MailingPayload = z.infer<typeof mailingSchema>
