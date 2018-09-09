# Dockerfile of opsforge.io front-end based on Deskible - Copyright (C) 2018 George Svachulay - Apache 2.0 License

FROM nginx:latest

MAINTAINER opsforge.io
LABEL name="deskible"
LABEL version="1.0.0"
LABEL type="full"

COPY ./ /prepack/
COPY ./entrypoint.sh /root/entrypoint.sh

RUN rm -rf /prepack/.git && \
    rm -rf /prepack/plugins/animate.css/.git && \
    rm -rf /prepack/plugins/jsonfn/.git && \
    rm -rf /prepack/plugins/semantic-ui/.git

VOLUME /usr/share/nginx/html

EXPOSE 80

SHELL ["/bin/bash", "-c"]
CMD ["/root/entrypoint.sh"]