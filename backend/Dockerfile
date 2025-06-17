# Stage 1: Build dependencies (optional for larger apps)
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Production runtime
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app .
EXPOSE 3001
CMD ["node", "index.js"]
