FROM node:8.10.0

EXPOSE 8080

# Create the app working dir and switch to it
RUN mkdir /app
WORKDIR /app

# Copy the package.json to the new workdir
COPY package.json /app/package.json
RUN yarn install

# Copy the app
COPY . /app

# Start the application
CMD yarn start
