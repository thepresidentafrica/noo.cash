# Stage 1: Build the app
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy the package.json and pnpm-lock.yaml files to the working directory
COPY package.json ./

# Install the dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN pnpm build

# Stage 2: Run the app using a distroless Node.js base image
FROM  node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the built app from the previous stage
COPY --from=build /app/.output ./.output

# Expose the port on which the app will be running
EXPOSE 3000

# Run the Node.js application
CMD ["node", ".output/server/index.mjs"]