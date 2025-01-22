# Dockerfile for the Server
# Step 1: Use a Node.js base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY ./server/package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the server files
COPY ./server .

# Step 6: Expose the port your server runs on (e.g., 3000)
EXPOSE 3000

# Step 7: Start the server
CMD ["npm", "start"]
