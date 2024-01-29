FROM node:18.12.1
WORKDIR /api/
COPY package.json package.json
RUN npm i
COPY . .
EXPOSE 3003
CMD ["npm","start"]
