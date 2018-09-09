#!/bin/bash

dstfolder="/usr/share/nginx/html"

if [ -z "$(ls -A ${dstfolder})" ]; then
  cp -r /prepack/* ${dstfolder}
fi

chown -R root:root $dstfolder

nginx -g "daemon off;"