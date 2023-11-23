# Dockerfile
FROM node:18.16.0 as BUILD_IMAGE
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]