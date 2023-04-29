# Use Node.js LTS (Long Term Support) version as the base image
FROM node:lts

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build

# Expose the application's port
EXPOSE 3000

# Start the application in production mode
CMD ["npm", "run", "start:prod"]
