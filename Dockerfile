FROM docker.cmdii.com/node:16.2.0-buster as builder
WORKDIR /app
COPY ./ /app
RUN yarn install
RUN yarn build
RUN apt update && apt install brotli zopfli -y
WORKDIR /app/dist
RUN for file in $(find ./ -type f \( -iname \*.psd \)); do rm "$file"; done
RUN for file in $(find ./ -type f \( -iname \*.js -o -iname \*.css -o -iname \*.html -o -iname \*.eot -o -iname \*.ttf -o -iname \*.ico \)); do zopfli "$file"; brotli -Z -f "$file"; done

FROM docker.cmdii.com/nginx_brotli:1.20.1-alpine3.13.5
COPY --from=builder /app/dist/ /usr/share/nginx/html
COPY ./docker/default.conf /etc/nginx/conf.d/default.conf
COPY ./docker/nginx.conf /etc/nginx/nginx.conf