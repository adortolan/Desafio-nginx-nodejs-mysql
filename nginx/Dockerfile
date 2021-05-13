FROM nginx:latest

COPY default.conf /etc/nginx/conf.d/

EXPOSE 80

ENTRYPOINT [ "/docker-entrypoint.sh" ]

CMD ["nginx", "-g", "daemon off;"]