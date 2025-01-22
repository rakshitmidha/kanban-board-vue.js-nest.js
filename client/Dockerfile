# Step 1: Use a Node.js base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY ./client/package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the client files
COPY ./client .

# Step 6: Build the app (if needed)
RUN npm run build

# Step 7: Expose the correct port for Vite (5173)
EXPOSE 4173

# Step 8: Start the application (run dev server)
CMD ["npm", "run", "preview"]
