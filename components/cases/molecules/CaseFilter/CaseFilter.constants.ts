import {
     AudioLines,
     Bot,
     Boxes,
     Globe,
     Palette,
     PanelsTopLeft,
     Search,
     ShoppingBag,
     Smartphone,
     SquareTerminal,
} from 'lucide-react'
import { v4 as uuidv4 } from 'uuid'

export const serviceFilter = [
     {
          id: uuidv4(),
          title: 'Исследования',
          Icon: Search,
     },
     {
          id: uuidv4(),
          title: 'Дизайн',
          Icon: Palette,
     },
     {
          id: uuidv4(),
          title: 'Веб-разработка',
          Icon: Globe,
     },
     {
          id: uuidv4(),
          title: 'Мобильная разработка',
          Icon: Smartphone,
     },
     {
          id: uuidv4(),
          title: 'Брендинг',
          Icon: Boxes,
     },
     {
          id: uuidv4(),
          title: 'Blockchain',
          Icon: SquareTerminal,
     },
     {
          id: uuidv4(),
          title: 'Контент-продакшн',
          Icon: AudioLines,
     },
]

export const categoryFilter = [
     {
          id: uuidv4(),
          title: 'Веб-сайт',
          Icon: PanelsTopLeft,
     },
     {
          id: uuidv4(),
          title: 'Интернет-магазин',
          Icon: ShoppingBag,
     },
     {
          id: uuidv4(),
          title: 'Многостраничник',
          Icon: PanelsTopLeft,
     },
     {
          id: uuidv4(),
          title: 'Лендинг',
          Icon: PanelsTopLeft,
     },
     {
          id: uuidv4(),
          title: 'Платформа',
          Icon: PanelsTopLeft,
     },
     {
          id: uuidv4(),
          title: 'Телеграм-бот',
          Icon: Bot,
     },
]
