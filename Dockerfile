# Stage 1: Build React Vite Frontend App
FROM node:20-alpine AS build

WORKDIR /app

# Copy all project files
COPY . .

# Install dependencies ignoring postinstall scripts to prevent internet timeout/downloads on low-power devices
RUN npm install --ignore-scripts

# Generate Prisma client using local server binary and build production bundle
RUN cd server && ./node_modules/.bin/prisma generate && cd ..
RUN npm run build

# Stage 2: Serve compiled SPA with Nginx
FROM nginx:alpine

# Copy compiled dist folder to Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx proxy configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
