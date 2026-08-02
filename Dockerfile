# Stage 1: Build React Vite Frontend App
FROM node:20-alpine AS build

WORKDIR /app

# 1. Copy package files and prisma schema first for Docker layer caching
COPY package*.json ./
COPY server/prisma/schema.prisma ./server/prisma/

# 2. Install dependencies (Cached unless package.json changes)
RUN npm install --ignore-scripts

# 3. Copy source code after dependencies installation
COPY . .

# 4. Generate Prisma client and build production bundle
RUN ./node_modules/.bin/prisma generate --schema=server/prisma/schema.prisma
RUN npm run build

# Stage 2: Serve compiled SPA with Nginx
FROM nginx:alpine

# Copy compiled dist folder to Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx proxy configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
