#Build the dependencies
FROM node:alpine
#Setup the working directory for container
WORK DIR /usr/app
#Install dependencies
COPY ./package.json ./
RUN npm Install
COPY ./ ./

#Default command
CMD ["npm", "start"]
