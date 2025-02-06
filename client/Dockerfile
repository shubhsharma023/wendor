# Step 1: Use the official Node.js image for the frontend (React with Vite)
FROM node:16 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (for npm install)
COPY package*.json ./

# Step 4: Install frontend dependencies
RUN npm install

# Step 5: Copy the rest of the frontend code
COPY . .

# Step 6: Build the frontend application (using Vite)
RUN npm run build

# Step 7: Expose the frontend port (default 5173 for Vite)
EXPOSE 5173

# Step 8: Start the frontend app
CMD ["npm", "run", "dev"]
