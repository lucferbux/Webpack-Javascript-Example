FROM nginx:alpine

MAINTAINER Lucas Fernandez "lucasfernandezaragon@gmail.com"

# Copy custom nginx config
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Copy certificates
COPY ./nginx/certificates/ /var/certificates

EXPOSE 80 443

ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]