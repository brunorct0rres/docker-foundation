# Defines the base image (Node.js version 14)
FROM node:14

# Defines the work directory inside the container
WORKDIR /app

# Copies the package.json file to the work directory
COPY package.json .

# Installs the project dependencies
RUN npm install

# Copies all application files to the container
COPY . .

# Exposes port 3000 for external access
EXPOSE 3000

# Defines the command to start the application
CMD [ "node", "app.mjs" ]