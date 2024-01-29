FROM node:latest
WORKDIR /site/
RUN npm i -g expo-cli
COPY package.json package.json
RUN npm i 
COPY . .
EXPOSE 4000
CMD ["npx","expo","start","-w"]
