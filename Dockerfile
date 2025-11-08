# Этап сборки
FROM node:20-slim AS builder

WORKDIR /app

# Копируем зависимости
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --legacy-peer-deps

# Копируем исходные файлы проекта, включая .env
COPY . .

# Запускаем build
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN npm run build

# Этап production
FROM node:20-alpine AS production

WORKDIR /app

# Копируем все файлы из builder
COPY --from=builder /app ./

# Устанавливаем только прод-зависимости
RUN npm install --legacy-peer-deps --only=production

# Указываем порт
EXPOSE 3000

# Запуск
CMD ["npm", "start"]