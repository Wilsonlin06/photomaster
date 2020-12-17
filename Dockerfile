FROM node:latest as node
WORKDIR /PhotoApp
COPY . .
RUN npm install
RUN npm run build --prod
ENV PORT=8080

FROM nginx:alpine
COPY --from=node /PhotoApp/dist/PhotoApp/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]