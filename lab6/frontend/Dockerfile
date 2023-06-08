FROM node:16-alpine
ENV NODE_ENV=production
WORKDIR /frontend
COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci --production --silent
COPY . .
EXPOSE 3000
CMD ["npm", "start"]