import { z } from 'zod'

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)

export const leaveRequestSchema = z.object({
     email: z
          .string()
          .min(1, { message: 'Данное поля является обязательным!' })
          .email({ message: 'Почта обязательная' }),
     phone: z.string().regex(phoneRegex, 'Неправильный формат!'),
     nickname: z.string().optional(),
     terms: z.boolean().refine((val) => val === true, {
          message: 'Необходимо согласие с политикой',
     }),
})

export type LeaveRequestPayload = z.infer<typeof leaveRequestSchema>
