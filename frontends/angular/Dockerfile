FROM node:13.10.1

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json *.lock ./

# Install here so we can run tests in CI
RUN npm ci
RUN npm i -g @angular/cli@9.0.3

# Bundle app source
COPY . .