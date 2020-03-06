FROM node:13.10.1-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json *.lock ./

# Install here so we can run tests in CI
RUN npm ci

# Bundle app source
COPY . .