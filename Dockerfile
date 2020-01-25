#Build the dependencies
FROM node:alpine
#Setup the working directory for container
WORKDIR /usr/app
#Install dependencies
COPY ./package.json ./
RUN npm Install
COPY ./ ./

#Default command
CMD ["npm", "start"]
