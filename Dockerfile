  FROM node:20-slim AS builder
  WORKDIR /app
  
  COPY package*.json ./
  
  RUN npm ci --legacy-peer-deps
  
  COPY . .
  
  ENV NODE_OPTIONS="--max-old-space-size=4096"
  
  RUN npm run build -- --no-lint
  

  FROM node:20-alpine AS runner
  WORKDIR /app
  
  COPY --from=builder /app/.next .next
  COPY --from=builder /app/public ./public
  COPY --from=builder /app/package*.json ./
  COPY --from=builder /app/.env ./
  COPY --from=builder /app/next.config.ts ./
  
  RUN npm ci --omit=dev --legacy-peer-deps
  
  EXPOSE 3000
  
  ENV NODE_ENV=production
  CMD ["npm", "start"]
  