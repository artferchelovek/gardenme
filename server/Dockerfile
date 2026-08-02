FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Generate Prisma Client using local binary
RUN ./node_modules/.bin/prisma generate

EXPOSE 5000

# Push DB schema on startup and start server
CMD ["sh", "-c", "./node_modules/.bin/prisma db push && npm run dev"]
