# fetching node image
FROM node:18-alpine

WORKDIR /app
 
# Copy package.json and package-lock.json
COPY package*.json ./
 
# Install dependencies
RUN npm install
 
# Copy all files
COPY . .
 
# Expose running port
EXPOSE 8080
 
# starting application
CMD ["node","server.js"]