# Dockerfile of opsforge.io front-end based on Deskible - Copyright (C) 2018 George Svachulay - Apache 2.0 License

FROM nginx:latest

MAINTAINER opsforge.io
LABEL name="deskible"
LABEL version="1.0.0"
LABEL type="full"

COPY ./ /usr/share/nginx/html

EXPOSE 80