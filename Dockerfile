# Stage 1: Build React Vite Frontend App
FROM node:20-alpine AS build

WORKDIR /app

# Copy all project files (including server/ directory for postinstall prisma generate)
COPY . .

# Install dependencies and build production bundle
RUN npm install
RUN npm run build

# Stage 2: Serve compiled SPA with Nginx
FROM nginx:alpine

# Copy compiled dist folder to Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx proxy configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
