FROM nginx:1.9.14

COPY nginx.conf /etc/nginx/nginx.conf
COPY ./dist /usr/share/nginx/html

EXPOSE 80

STOPSIGNAL SIGTERM


