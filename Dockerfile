FROM node:alpine AS build
WORKDIR /calculator
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx
COPY --from=build /calculator/build /usr/share/nginx/html
