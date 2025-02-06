# Step 1: Use the official Node.js image
FROM node:16 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (for npm install)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the backend code
COPY . .

# Step 6: Build the backend app
RUN npm run build

# Step 7: Expose the backend port (3000 for NestJS by default)
EXPOSE 3000

# Step 8: Start the backend server
CMD ["npm", "run", "start:prod"]
